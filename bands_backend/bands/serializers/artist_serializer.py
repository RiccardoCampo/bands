from rest_framework import serializers

from bands.models.artist import Artist
from bands.serializers.score_in_artist_serializer import ScoreInArtistSerializer


class ArtistSerializer(serializers.ModelSerializer):
    scores = ScoreInArtistSerializer(many=True, source="score_set")

    class Meta:
        model = Artist
        fields = ["id", "name", "link_url", "image_url", "rating", "created_at", "scores"]
