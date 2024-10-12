from rest_framework.pagination import PageNumberPagination
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from bands.models import Artist
from bands.serializers.artist_serializer import ArtistSerializer


class ArtistApiView(APIView):
    def get(self, request: Request) -> Response:
        artists = Artist.objects.all()

        if name := self.request.query_params.get("name"):
            artists = artists.filter(name__icontains=name)

        paginator = PageNumberPagination()

        serializer = ArtistSerializer(paginator.paginate_queryset(queryset=artists, request=request), many=True)

        return paginator.get_paginated_response(serializer.data)
