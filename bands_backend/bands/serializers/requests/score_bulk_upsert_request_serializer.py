from rest_framework import serializers
from rest_framework.exceptions import ErrorDetail, ValidationError

from bands.models import Score


class ScoreBulkUpsertRequestSerializer(serializers.Serializer):
    """
    Serializer for the Score bulk update request payload.
    """

    class ScoreUpsertSerializer(serializers.Serializer):
        id = serializers.IntegerField(required=False)
        metric_id = serializers.IntegerField(required=False)
        artist_id = serializers.IntegerField(required=False)
        value = serializers.IntegerField(min_value=0, max_value=Score.MAX_SCORE_VALUE, required=True)

        def is_valid(self, *, raise_exception: bool = True) -> bool:
            """
            Check if the parameters are valid.

            Check each metric name and score, besides the name and page checks.
            """

            self._errors = {}

            super().is_valid()

            key_fields = {"id", "metric_id", "artist_id"}

            if not key_fields.intersection(self.initial_data.keys()):
                for key_field in key_fields:
                    self._errors[key_field] = ErrorDetail(
                        "for each score either specify id or metric_id and artist_id"
                    )
            if "id" not in self.initial_data and (
                missing_keys := {"artist_id", "metric_id"}.difference(self.initial_data)
            ):
                self._errors[list(missing_keys)[0]] = ErrorDetail("you need to specify both artist_id and metric_id")

            if self._errors and raise_exception:
                raise ValidationError(self.errors)

            return not bool(self._errors)

    updates = ScoreUpsertSerializer(many=True)
