from rest_framework import serializers
from bands.models.artist import Artist


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ["id", "name", "spotify_url", "image_url", "created_at"]
        ordering = ["name", "-id"]
