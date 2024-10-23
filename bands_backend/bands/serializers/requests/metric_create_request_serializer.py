from typing import Any

from rest_framework import serializers

from bands.models import Metric


class MetricCreateRequestSerializer(serializers.Serializer):
    """
    Serializer for the Metric create request payload.
    """

    name = serializers.CharField(max_length=255, required=True)
    type = serializers.ChoiceField(choices=Metric.MetricType.labels, required=False)
    category = serializers.ChoiceField(choices=Metric.MetricCategory.labels, required=False)

    def to_representation(self, instance: Any) -> dict[str, Any]:
        """
        Return the request data, convert the enums.
        """

        data = super().to_representation(instance)

        return self.enum_labels_to_values(data)

    @staticmethod
    def enum_labels_to_values(metric_dict: dict[str, Any]) -> dict[str, Any]:
        """
        Convert Metric enums labels into values.
        """

        for enum_key, enum_class in Metric.enum_fields().items():
            if (enum_value := metric_dict.get(enum_key)) is not None:
                metric_dict[enum_key] = str(enum_class[enum_value.upper()].value)

        return metric_dict
