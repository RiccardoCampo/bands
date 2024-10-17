import pytest
from rest_framework.exceptions import ErrorDetail

from bands.serializers.requests.artist_list_request_serializer import ArtistListRequestSerializer


class TestArtistListRequestSerializer:
    """
    Test ArtistListRequestSerializer.
    """

    @pytest.mark.parametrize(
        "value_query_param,expected_bounds",
        [
            pytest.param("[,]", (0, 5), id="empty"),
            pytest.param("[1,]", (1, 5), id="left only"),
            pytest.param("[,4]", (0, 4), id="right only"),
            pytest.param("[2,3]", (2, 3), id="both"),
            pytest.param("[-1,6]", (0, 5), id="both clamped"),
        ],
    )
    def test_get_score_bounds(self, value_query_param: str, expected_bounds: tuple[int, int]) -> None:
        """
        Assert that the score value bounds are extracted correctly from the query parameter.
        """

        assert ArtistListRequestSerializer._get_score_bounds(value_query_param) == expected_bounds

    @pytest.mark.parametrize(
        "data,valid,errors",
        [
            pytest.param({}, True, {}, id="empty"),
            pytest.param(
                {
                    "name": "test-valid",
                    "page": 1,
                    "test-metric": "3",
                },
                True,
                {},
                id="valid",
            ),
            pytest.param(
                {"name": "a" * 256},
                False,
                {
                    "name": [
                        ErrorDetail(string="Ensure this field has no more than 255 characters.", code="max_length")
                    ]
                },
                id="invalid name",
            ),
            pytest.param(
                {"page": 0},
                False,
                {"page": [ErrorDetail(string="Ensure this value is greater than or equal to 1.", code="min_value")]},
                id="invalid page",
            ),
            pytest.param(
                {"a" * 256: "1"},
                False,
                {"a" * 256: ErrorDetail(string=f"invalid metric name {'a' * 256}", code=None)},
                id="invalid metric name",
            ),
            pytest.param(
                {"test-metric": "[123,456"},
                False,
                {"test-metric": ErrorDetail(string="invalid score value [123,456 for metric test-metric", code=None)},
                id="invalid score",
            ),
        ],
    )
    def test_validate_score_value(
        self, data: dict[str, int | str], valid: bool, errors: dict[str, ErrorDetail]
    ) -> None:
        """
        Assert query parameters validity.
        """

        serializer = ArtistListRequestSerializer(data=data)

        assert serializer.is_valid(raise_exception=False) == valid
        assert serializer._errors == errors

    def test_get_scores(self) -> None:
        """
        Assert that the scores are serialized correctly.
        """

        serializer = ArtistListRequestSerializer(data={"test-metric-1": "1", "test-metric-2": "[1,3]"})
        serializer.is_valid()

        assert serializer.data == {"scores": {"test-metric-1": 1, "test-metric-2": (1, 3)}}
