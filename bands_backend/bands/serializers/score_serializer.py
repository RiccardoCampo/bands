from rest_framework import serializers

from bands.models.score import Score


class ScoreSerializer(serializers.ModelSerializer):
    """
    Score model serializer.
    """

    class Meta:
        """
        Settings.
        """

        model = Score
        fields = ["artist", "metric", "value"]
