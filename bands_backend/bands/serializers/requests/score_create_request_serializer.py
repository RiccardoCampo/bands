from rest_framework import serializers

from bands.models import Score


class ScoreCreateRequestSerializer(serializers.Serializer):
    """
    Serializer for the Score create request payload.
    """

    artist_id = serializers.IntegerField(min_value=1, required=True)
    metric_id = serializers.IntegerField(min_value=1, required=True)
    value = serializers.IntegerField(min_value=0, max_value=Score.MAX_SCORE_VALUE, required=True)
