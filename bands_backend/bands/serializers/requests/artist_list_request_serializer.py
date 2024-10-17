import re
from typing import Any

from rest_framework import serializers
from rest_framework.exceptions import ErrorDetail, ValidationError

from bands.models import Score


class ArtistListRequestSerializer(serializers.Serializer):
    """
    Serializer for the Artist list request parameters.
    """

    name = serializers.CharField(max_length=255, required=False)
    page = serializers.IntegerField(min_value=1, required=False)
    scores = serializers.SerializerMethodField()

    def is_valid(self, *, raise_exception: bool = True) -> bool:
        """
        Check if the parameters are valid.

        Check each metric name and score, besides the name and page checks.
        """

        self._errors = {}

        super().is_valid()

        for key, value in self.initial_data.items():
            if key not in self.fields:
                if not self._validate_metric_name(key):
                    self._errors[key] = ErrorDetail(f"invalid metric name {key}")
                if not self._validate_score_value(value):
                    self._errors[key] = ErrorDetail(f"invalid score value {value} for metric {key}")

        if self._errors and raise_exception:
            raise ValidationError(self.errors)

        return not bool(self._errors)

    def get_scores(self, _: Any) -> dict[str, int | tuple[int, int]]:
        """
        Get the scores request parameters.
        """

        scores_params: dict[str, int | tuple[int, int]] = {}

        for key, value in self.initial_data.items():
            if key not in self.fields:
                if "[" in value:
                    scores_params[key] = self._get_score_bounds(value)
                else:
                    scores_params[key] = Score.clamp_score_value(int(value))

        return scores_params

    @staticmethod
    def _validate_score_value(score_value: Any) -> bool:
        """
        Check that the score value is either a single number of a range (with bounds optional).
        """

        return bool(isinstance(score_value, str) and re.match(r"(\d+)|(\[\d*,\d*])", score_value))

    @staticmethod
    def _validate_metric_name(metric_name: Any) -> bool:
        """
        Check that the metric name is a string shorter than 255.
        """

        return isinstance(metric_name, str) and len(metric_name) <= 255

    @staticmethod
    def _get_score_bounds(value_query_param: str) -> tuple[int, int]:
        """
        Extract the range values from the request.

        Default the left value to 0 and the right value to the maximum, clamp both values.
        """

        left_value, right_value = str(value_query_param)[1:-1].split(",")

        return (
            Score.clamp_score_value(int(left_value or 0)),
            Score.clamp_score_value(int(right_value or Score.MAX_SCORE_VALUE)),
        )
