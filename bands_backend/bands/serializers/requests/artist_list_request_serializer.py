import re
from typing import Any

from rest_framework import serializers
from rest_framework.exceptions import ErrorDetail, ValidationError

from bands.models import Artist, Score


class ArtistListRequestSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255, required=False)
    page = serializers.IntegerField(min_value=1, required=False)
    rating = serializers.SerializerMethodField()
    scores = serializers.SerializerMethodField()

    def is_valid(self, *, raise_exception: bool = True) -> bool:
        self._errors = {}

        super().is_valid()

        for key, value in self.initial_data.items():
            if key not in self.fields:
                if not self._validate_metric_name(key):
                    self._errors[key] = ErrorDetail(f"invalid metric name {key}")
                if not self._validate_score_value(value):
                    self._errors[key] = ErrorDetail(f"invalid score value {value} for metric {key}")
            if key == "rating":
                if not self._validate_score_value(value):
                    self._errors[key] = ErrorDetail(f"invalid rating value {value}")

        if self._errors and raise_exception:
            raise ValidationError(self.errors)

        return not bool(self._errors)

    def get_scores(self, _: Any) -> dict[str, int | tuple[int, int]]:
        scores_params: dict[str, int | tuple[int, int]] = {}

        for key, value in self.initial_data.items():
            if key not in self.fields:
                if "[" in value:
                    scores_params[key] = self._get_score_bounds(value)
                else:
                    scores_params[key] = Score.clamp_score_value(int(value))

        return scores_params

    def get_rating(self, _: Any) -> None | int | tuple[int, int]:
        raw_rating = self.initial_data.get("rating")

        if raw_rating:
            return self._get_score_bounds(raw_rating) if "[" in raw_rating else Artist.clamp_rating(int(raw_rating))
        return None

    @staticmethod
    def _validate_score_value(score_value: Any) -> bool:
        return bool(isinstance(score_value, str) and re.match(r"(\d+)|(\[\d*,\d*])", score_value))

    @staticmethod
    def _validate_metric_name(metric_name: Any) -> bool:
        return isinstance(metric_name, str) and len(metric_name) <= 255

    @staticmethod
    def _get_score_bounds(value_query_param: str) -> tuple[int, int]:
        left_value, right_value = str(value_query_param)[1:-1].split(",")

        return (
            Score.clamp_score_value(int(left_value or 0)),
            Score.clamp_score_value(int(right_value or Score.MAX_SCORE_VALUE)),
        )
