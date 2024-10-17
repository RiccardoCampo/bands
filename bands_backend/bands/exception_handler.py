from django.core.exceptions import ObjectDoesNotExist
from django.db import DatabaseError, IntegrityError
from rest_framework.response import Response
from rest_framework.views import exception_handler


def custom_exception_handler(exc: Exception, context: dict) -> Response:
    """
    Render exceptions.
    """

    response = exception_handler(exc, context)

    if isinstance(exc, IntegrityError):
        response = Response(status=400, exception=True, data={"integrity_error": str(exc)})
    elif isinstance(exc, ObjectDoesNotExist):
        response = Response(status=404, exception=True, data={"not_found_error": str(exc)})
    elif isinstance(exc, DatabaseError):
        response = Response(status=500, exception=True, data={"database_error": str(exc)})

    return response or Response(status=500, exception=True, data={"error": str(exc)})
