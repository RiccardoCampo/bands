from django.urls import path

from bands.views.artist_view import ArtistApiView

urlpatterns = [
    path("artist", ArtistApiView.as_view()),
]
