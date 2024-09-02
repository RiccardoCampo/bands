from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from bands.models import Artist
from bands.serializers.artist_serializer import ArtistSerializer
from bands.views.pagination import CustomPagination


class ArtistApiView(APIView):
    pagination_class = CustomPagination
    def get(self, request, *args, **kwargs):
        artists = Artist.objects.filter()
        serializer = ArtistSerializer(artists, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
