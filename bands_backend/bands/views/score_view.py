from django.db import transaction
from rest_framework import serializers
from rest_framework.decorators import action
from rest_framework.request import Request
from rest_framework.response import Response

from bands.models import Score
from bands.serializers.requests.score_bulk_upsert_request_serializer import ScoreBulkUpsertRequestSerializer
from bands.serializers.requests.score_create_request_serializer import ScoreCreateRequestSerializer
from bands.serializers.requests.score_update_request_serializer import ScoreUpdateRequestSerializer
from bands.serializers.score_serializer import ScoreSerializer
from bands.views.model_view import ModelViewSet


class ScoreViewSet(ModelViewSet):
    """
    Score API.
    """

    serializer_class = ScoreSerializer
    queryset = Score.objects
    model = Score
    create_request_serializer = ScoreCreateRequestSerializer
    update_request_serializer = ScoreUpdateRequestSerializer

    @transaction.atomic
    @action(detail=False, methods=["PUT"], name="Bulk update", url_path="bulk-upsert")
    def bulk_update(self, request: Request) -> Response:
        """
        Bulk upsert.

        Create or update each score specified in the request payload.
        """

        request_payload: serializers.Serializer = ScoreBulkUpsertRequestSerializer(data=request.data)
        request_payload.is_valid(raise_exception=True)

        for update in request_payload.data.get("updates", []):
            if "id" in update:
                model = self.get_queryset().get(id=update["id"])
                model.value = update["value"]
            else:
                model = self.model(**update)
            model.save()

        return Response("OK")
