from rest_framework import serializers

from bands.models import Score


class ScoreUpdateRequestSerializer(serializers.Serializer):
    """
    Serializer for the Score update request payload.
    """

    value = serializers.IntegerField(min_value=0, max_value=Score.MAX_SCORE_VALUE, required=True)
