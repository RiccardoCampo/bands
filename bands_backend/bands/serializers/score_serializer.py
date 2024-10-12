from typing import Any

from rest_framework import serializers

from bands.models.score import Score


class ScoreSerializer(serializers.ModelSerializer):
    """
    Score model serializer.

    Include the metric name and type.
    """

    metric: Any = serializers.SlugRelatedField(read_only=True, slug_field="name")
    type: Any = serializers.SlugRelatedField(read_only=True, slug_field="type", source="metric")

    class Meta:
        """
        Settings.
        """

        model = Score
        fields = ["metric", "type", "value"]
        ordering = ["metric"]
