from rest_framework import serializers


class ArtistCreateRequestSerializer(serializers.Serializer):
    """
    Serializer for the Artist create request payload.
    """

    name = serializers.CharField(max_length=255, required=True)
    spotify_url = serializers.URLField(required=False, allow_blank=True)
    image_url = serializers.URLField(required=False, allow_blank=True)
    rating = serializers.IntegerField(required=False, default=1)
