from rest_framework import serializers

from bands.serializers.requests.metric_create_request_serializer import MetricCreateRequestSerializer


class MetricUpdateRequestSerializer(MetricCreateRequestSerializer):
    """
    Serializer for the Metric update request payload.
    """

    name = serializers.CharField(max_length=255, required=False)
