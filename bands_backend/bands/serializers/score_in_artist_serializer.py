from typing import Any

from rest_framework import serializers

from bands.models.score import Score


class ScoreInArtistSerializer(serializers.ModelSerializer):
    """
    Score model serializer, when displayed inside an artist.

    Include the metric name and type.
    """

    metric: Any = serializers.SlugRelatedField(read_only=True, slug_field="name")
    type: Any = serializers.SerializerMethodField()
    category: Any = serializers.SerializerMethodField()

    class Meta:
        """
        Settings.
        """

        model = Score
        fields = ["id", "metric", "type", "category", "value"]
        ordering = ["metric"]

    @staticmethod
    def get_type(model: Score) -> str:
        """
        Get the metric type.
        """

        return model.metric.get_type_display()

    @staticmethod
    def get_category(model: Score) -> str:
        """
        Get the metric type.
        """

        return model.metric.get_category_display()
