from django.urls import include, path

from bands import urls as bands_urls

urlpatterns = [
    path("bands/", include(bands_urls)),
]
