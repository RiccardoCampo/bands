from rest_framework import serializers

from bands.models import Artist


class ArtistCreateRequestSerializer(serializers.Serializer):
    """
    Serializer for the Artist create request payload.
    """

    name = serializers.CharField(max_length=255, required=True)
    spotify_url = serializers.URLField(required=False, allow_blank=True)
    image_url = serializers.URLField(required=False, allow_blank=True)

    @property
    def artist(self) -> Artist:
        """
        Get the new artist to create.
        """

        return Artist(**self.data)
