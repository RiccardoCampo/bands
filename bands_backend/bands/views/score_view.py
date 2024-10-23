from bands.models import Score
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
