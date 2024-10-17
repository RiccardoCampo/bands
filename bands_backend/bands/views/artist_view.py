from typing import Any

from django.db.models import QuerySet
from rest_framework import viewsets
from rest_framework.request import Request
from rest_framework.response import Response

from bands.models import Artist
from bands.serializers.artist_serializer import ArtistSerializer
from bands.serializers.requests.artist_create_request_serializer import ArtistCreateRequestSerializer
from bands.serializers.requests.artist_list_request_serializer import ArtistListRequestSerializer


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

        query_params = ArtistListRequestSerializer(data=self.request.query_params)
        query_params.is_valid()

        serializer = self.get_serializer(
            self.paginator.paginate_queryset(  # type: ignore[union-attr]
                queryset=self._filter_artists(query_params.data), request=request
            ),
            many=True,
        )

        return self.paginator.get_paginated_response(serializer.data)  # type: ignore[union-attr]

    def create(self, request: Request) -> Response:
        """
        Create.

        Create a new artists, with data provided in the request payload.
        """

        request_payload = ArtistCreateRequestSerializer(data=request.data)
        request_payload.is_valid(raise_exception=True)

        new_artist = request_payload.artist
        new_artist.save()

        return Response(self.get_serializer(new_artist).data)

    def update(self, request: Request, pk: int) -> Response:
        """
        Update.

        Update an existing artist, edit all the updatable fields found in the request payload.
        """

        request_payload = ArtistCreateRequestSerializer(data=request.data)
        request_payload.is_valid(raise_exception=True)

        artist = self.get_queryset().get(id=pk)

        artist.__dict__.update(request_payload.data)

        artist.save(update_fields=request_payload.data.keys())

        return Response(self.get_serializer(artist).data)

    def destroy(self, _: Request, pk: int) -> Response:
        """
        Destroy.

        Soft deletes an existing artist.
        """

        self.get_queryset().get(id=pk).delete()

        return Response("OK")

    def _filter_artists(self, query_params: dict[str, Any]) -> QuerySet:
        """
        Get the query set, apply query string filters.
        """

        artists = self.get_queryset().order_by("id")

        if name := query_params.get("name"):
            artists = artists.filter(name__icontains=name)

        for metric_name, value in query_params.get("scores", {}).items():
            if isinstance(value, tuple):
                artists = artists.filter(score__metric__name=metric_name, score__value__range=value)
            else:
                artists = artists.filter(score__metric__name=metric_name, score__value=value)

        return artists.distinct()
