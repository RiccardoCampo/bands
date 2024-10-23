from rest_framework.request import Request
from rest_framework.response import Response

from bands.models import Metric
from bands.serializers.metric_serializer import MetricSerializer
from bands.serializers.requests.metric_create_request_serializer import MetricCreateRequestSerializer
from bands.serializers.requests.metric_update_request_serializer import MetricUpdateRequestSerializer
from bands.views.model_view import ModelViewSet


class MetricViewSet(ModelViewSet):
    """
    Metric API.
    """

    serializer_class = MetricSerializer
    queryset = Metric.objects.filter(deleted_at=None)
    model = Metric
    create_request_serializer = MetricCreateRequestSerializer
    update_request_serializer = MetricUpdateRequestSerializer

    def list(self, _: Request) -> Response:
        """
        List.

        Get the paginated list of artist, filter it by name or scores.
        """

        return Response(self.get_serializer(self.get_queryset(), many=True).data)
