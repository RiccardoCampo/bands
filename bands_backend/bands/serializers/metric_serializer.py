from typing import Any

from rest_framework import serializers

from bands.models import Metric


class MetricSerializer(serializers.ModelSerializer):
    """
    Metrics model serializer.
    """

    type: Any = serializers.SerializerMethodField()
    category: Any = serializers.SerializerMethodField()

    class Meta:
        """
        Settings.
        """

        model = Metric
        fields = ["id", "name", "type", "category"]
        ordering = ["name", "-id"]

    @staticmethod
    def get_type(model: Metric) -> str:
        """
        Get the metric type.
        """

        return model.get_type_display()

    @staticmethod
    def get_category(model: Metric) -> str:
        """
        Get the metric type.
        """

        return model.get_category_display()
