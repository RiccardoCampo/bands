from typing import Any

from rest_framework import serializers

from bands.models.score import Score


class ScoreSerializer(serializers.ModelSerializer):
    metric: Any = serializers.SlugRelatedField(read_only=True, slug_field="name")
    type: Any = serializers.SlugRelatedField(read_only=True, slug_field="type", source="metric")

    class Meta:
        model = Score
        fields = ["metric", "type", "value"]
        ordering = ["metric"]
