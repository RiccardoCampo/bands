from rest_framework.routers import DefaultRouter

from bands.views.artist_view import ArtistViewSet

router = DefaultRouter()
router.register("artist", ArtistViewSet, basename="artist")

urlpatterns = router.urls
