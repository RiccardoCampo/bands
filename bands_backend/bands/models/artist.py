from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from bands.models_extensions import PositiveAutoField, PositiveTinyIntegerField, SoftDeleteModel


class Artist(SoftDeleteModel):
    """
    Artist model.
    """

    MIN_RATING_VALUE = 1
    MAX_RATING_VALUE = 5

    id = PositiveAutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    spotify_url = models.CharField(max_length=2000)
    image_url = models.CharField(max_length=2000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    rating = PositiveTinyIntegerField(
        validators=[MinValueValidator(MIN_RATING_VALUE), MaxValueValidator(MAX_RATING_VALUE)], default=1
    )

    class Meta:
        """
        Settings.
        """

        db_table = "artist"

    @staticmethod
    def clamp_rating(value: int) -> int:
        """
        Clamp the input value between min and the max rating value.
        """

        return min(max(Artist.MIN_RATING_VALUE, value), Artist.MAX_RATING_VALUE)
