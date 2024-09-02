from django.urls import path, include
from bands import urls as bands_urls

urlpatterns = [
    path('bands/', include(bands_urls)),
]
