from django.db.models import QuerySet
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.request import Request
from rest_framework.response import Response

from bands.models import Artist
from bands.serializers.artist_serializer import ArtistSerializer


class ArtistViewSet(viewsets.GenericViewSet):
    """
    Artist API.
    """

    serializer_class = ArtistSerializer
    queryset = Artist.objects.filter(deleted_at=None)

    def list(self, request: Request) -> Response:
        """
        List.

        Get the paginated list of artist, filter it by name or scores.
        """

        paginator = PageNumberPagination()

        serializer = self.get_serializer(
            paginator.paginate_queryset(queryset=self._filter_artists(), request=request), many=True
        )

        return paginator.get_paginated_response(serializer.data)

    def create(self, request: Request) -> Response:
        """
        Create.

        Create a new artists, with data provided in the request payload.
        """

        new_artist = Artist(**request.data)

        new_artist.save()

        return Response(self.get_serializer(new_artist).data)

    def update(self, request: Request, pk: int) -> Response:
        """
        Update.

        Update an existing artist, edit all the updatable fields found in the request payload.
        """

        artist = self.get_queryset().get(id=pk)

        updates = {key: value for key, value in request.data.items() if key in Artist.updatable_fields}
        artist.__dict__.update(updates)

        artist.save(update_fields=Artist.updatable_fields)

        return Response(self.get_serializer(artist).data)

    def destroy(self, _: Request, pk: int) -> Response:
        """
        Destroy.

        Soft deletes an existing artist.
        """

        self.get_queryset().get(id=pk).delete()

        return Response("OK")

    def _filter_artists(self) -> QuerySet:
        """
        Get the query set, apply query string filters.
        """

        artists = self.get_queryset()

        for key, value in self.request.query_params.items():
            if key == "name":
                artists = artists.filter(name__icontains=value)
            elif key != "page":
                if "[" in value:
                    artists = artists.filter(score__metric__name=key, score__value__range=str(value)[1:-1].split(","))
                else:
                    artists = artists.filter(score__metric__name=key, score__value=value)

        return artists.distinct()
