from rest_framework.views import APIView

from bands.models import Artist
from bands.serializers.artist_serializer import ArtistSerializer
from bands.views.pagination import CustomPagination


class ArtistApiView(APIView):
    pagination_class = CustomPagination

    def get(self, request, *args, **kwargs):
        artists = Artist.objects.filter()
        paginator = self.pagination_class()
        paginated_artists = paginator.paginate_queryset(artists, request)
        serializer = ArtistSerializer(paginated_artists, many=True)
        return paginator.get_paginated_response(serializer.data)
