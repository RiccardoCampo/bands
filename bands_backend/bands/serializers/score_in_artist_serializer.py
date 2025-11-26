from typing import Any

from rest_framework import serializers

from bands.models.score import Score


class ScoreInArtistSerializer(serializers.ModelSerializer):
    metric: Any = serializers.SlugRelatedField(read_only=True, slug_field="name")
    type: Any = serializers.SerializerMethodField()
    category: Any = serializers.SerializerMethodField()

    class Meta:
        model = Score
        fields = ["id", "metric", "type", "category", "value"]
        ordering = ["category", "metric"]

    @staticmethod
    def get_type(model: Score) -> str:
        return model.metric.get_type_display()

    @staticmethod
    def get_category(model: Score) -> str:
        return model.metric.category
