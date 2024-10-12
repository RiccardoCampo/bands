from django.db import models

from bands.models_extensions import PositiveAutoField, SoftDeleteModel


class Artist(SoftDeleteModel):
    """
    Artist model.
    """

    id = PositiveAutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    spotify_url = models.CharField(max_length=2000)
    image_url = models.CharField(max_length=2000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        """
        Settings.
        """

        db_table = "artist"
