from django.urls import path
from bands.views.artist_view import ArtistApiView
from bands.views.metric_view import MetricApiView
from bands.views.score_view import ScoreApiView


urlpatterns = [
    path('artist', ArtistApiView.as_view()),
    path('metric', MetricApiView.as_view()),
    path('score', ScoreApiView.as_view()),
]
