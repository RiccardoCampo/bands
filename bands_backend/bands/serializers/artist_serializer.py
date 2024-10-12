from rest_framework import serializers

from bands.models.artist import Artist
from bands.serializers.score_serializer import ScoreSerializer


class ArtistSerializer(serializers.ModelSerializer):
    """
    Artists model serializer.

    Includes the list of scores.
    """

    scores = ScoreSerializer(many=True, source="score_set")

    class Meta:
        """
        Settings.
        """

        model = Artist
        fields = ["id", "name", "spotify_url", "image_url", "created_at", "scores"]
        ordering = ["name", "-id"]
