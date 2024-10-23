from typing import Any

from django.db.models import QuerySet
from rest_framework.request import Request
from rest_framework.response import Response

from bands.models import Artist
from bands.serializers.artist_serializer import ArtistSerializer
from bands.serializers.requests.artist_create_request_serializer import ArtistCreateRequestSerializer
from bands.serializers.requests.artist_list_request_serializer import ArtistListRequestSerializer
from bands.serializers.requests.artist_update_request_serializer import ArtistUpdateRequestSerializer
from bands.views.model_view import ModelViewSet


class ArtistViewSet(ModelViewSet):
    """
    Artist API.
    """

    serializer_class = ArtistSerializer
    queryset = Artist.objects.filter(deleted_at=None)
    model = Artist
    create_request_serializer = ArtistCreateRequestSerializer
    update_request_serializer = ArtistUpdateRequestSerializer

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
