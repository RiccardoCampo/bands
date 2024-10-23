from django.db.models import Model
from rest_framework import serializers, viewsets
from rest_framework.request import Request
from rest_framework.response import Response


class ModelViewSet(viewsets.GenericViewSet):
    """
    Metrics API.
    """

    model = Model
    create_request_serializer = serializers.Serializer
    update_request_serializer = serializers.Serializer

    def create(self, request: Request) -> Response:
        """
        Create.

        Create a new model, with data provided in the request payload.
        """

        request_payload: serializers.Serializer = self.create_request_serializer(data=request.data)
        request_payload.is_valid(raise_exception=True)

        new_model = self.model(**request_payload.data)
        new_model.save()

        return Response(self.get_serializer(new_model).data)

    def update(self, request: Request, pk: int) -> Response:
        """
        Update.

        Update an existing model, edit all the updatable fields found in the request payload.
        """

        request_payload: serializers.Serializer = self.update_request_serializer(data=request.data)
        request_payload.is_valid(raise_exception=True)

        model = self.get_queryset().get(id=pk)

        model.__dict__.update(request_payload.data)

        model.save(update_fields=request_payload.data.keys())

        return Response(self.get_serializer(model).data)

    def destroy(self, _: Request, pk: int) -> Response:
        """
        Destroy.

        Deletes an existing model.
        """

        self.get_queryset().get(id=pk).delete()

        return Response("OK")
