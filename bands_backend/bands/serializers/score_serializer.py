from rest_framework import serializers

from bands.models.score import Score


class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = ["artist", "metric", "value"]
