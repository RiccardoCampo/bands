from rest_framework import serializers


class ArtistUpdateRequestSerializer(serializers.Serializer):
    """
    Serializer for the Artist update request payload.
    """

    name = serializers.CharField(max_length=255, required=False)
    spotify_url = serializers.URLField(required=False, allow_blank=True)
    image_url = serializers.URLField(required=False, allow_blank=True)
