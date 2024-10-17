from unittest.mock import MagicMock

import pytest

from bands.views.artist_view import ArtistViewSet


class TestArtistViewSet:
    """
    ArtistViewSet unit tests.
    """

    BASE_ARTIST_QUERY: str = (
        "SELECT DISTINCT `artist`.`deleted_at`, `artist`.`id`, `artist`.`name`, `artist`.`spotify_url`, "
        "`artist`.`image_url`, `artist`.`created_at`, `artist`.`updated_at` FROM `artist`"
    )
    JOINS: str = (
        "INNER JOIN `score` ON (`artist`.`id` = `score`.`artist_id`) "
        "INNER JOIN `metric` ON (`score`.`metric_id` = `metric`.`id`)"
    )
    WHERE_DELETE_AT: str = "`artist`.`deleted_at` IS NULL"
    ORDER_BY: str = "ORDER BY `artist`.`id` ASC"

    @pytest.mark.parametrize(
        "query_params,expected_sql",
        [
            pytest.param({}, f"{BASE_ARTIST_QUERY} WHERE {WHERE_DELETE_AT} {ORDER_BY}", id="empty"),
            pytest.param(
                {"name": "ciao"},
                f"{BASE_ARTIST_QUERY} WHERE ({WHERE_DELETE_AT} AND `artist`.`name` LIKE %ciao%) {ORDER_BY}",
                id="name",
            ),
            pytest.param(
                {"scores": {"some_score": 3}},
                f"{BASE_ARTIST_QUERY} {JOINS} WHERE ({WHERE_DELETE_AT} "
                f"AND `metric`.`name` = some_score AND `score`.`value` = 3) {ORDER_BY}",
                id="score one value, value is clamped down",
            ),
            pytest.param(
                {"name": "ciao", "scores": {"some_score": "3"}},
                f"{BASE_ARTIST_QUERY} {JOINS} WHERE ({WHERE_DELETE_AT} "
                f"AND `artist`.`name` LIKE %ciao% AND `metric`.`name` = some_score "
                f"AND `score`.`value` = 3) {ORDER_BY}",
                id="score and name",
            ),
            pytest.param(
                {"scores": {"some_score": (1, 3)}},
                f"{BASE_ARTIST_QUERY} {JOINS} WHERE ({WHERE_DELETE_AT} "
                f"AND `metric`.`name` = some_score AND `score`.`value` BETWEEN 1 AND 3) {ORDER_BY}",
                id="score range",
            ),
        ],
    )
    def test_filter_artists(self, query_params: dict[str, str], expected_sql: str) -> None:
        """
        Assert that the correct query is built, starting from the request query parameters.
        """

        artist_view_set = ArtistViewSet()
        artist_view_set.request = MagicMock(query_params=query_params)

        assert str(artist_view_set._filter_artists(query_params).query) == expected_sql
