from rest_framework.routers import DefaultRouter

from bands.views.artist_view import ArtistViewSet
from bands.views.metric_view import MetricViewSet
from bands.views.score_view import ScoreViewSet

router = DefaultRouter()
router.register("artist", ArtistViewSet, basename="artist")
router.register("metric", MetricViewSet, basename="metric")
router.register("score", ScoreViewSet, basename="score")

urlpatterns = router.urls
