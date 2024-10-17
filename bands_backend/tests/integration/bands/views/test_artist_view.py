import json
from typing import Any

from django.forms import model_to_dict
from django.test import TestCase

from bands.models import Artist, Metric, Score
from tests.integration.bands.data import ARTISTS, METRICS, SCORES


class TestArtistViewSet(TestCase):
    """
    ArtistViewSet unit tests.
    """

    @classmethod
    def setUpTestData(cls) -> None:
        """
        Fill the database.
        """

        for artist in ARTISTS:
            Artist.objects.create(**artist)

        for metric in METRICS:
            Metric.objects.create(**metric)

        for score in SCORES:
            Score.objects.create(**score)

    def test_list_valid(self) -> None:
        """
        Check that the list endpoint respond without errors, returning the expected number of artists.
        """

        response = self.client.get("/bands/artist/?page=1&name=artist-t&score=[3,]")

        self.assertEqual(response.status_code, 200)

        results = json.loads(response.content)["results"]
        self.assertEqual(len(results), 2)
        self.assertArtistEqual(results[0], ARTISTS[1])
        self.assertArtistEqual(results[1], ARTISTS[2])

    def test_list_invalid(self) -> None:
        """
        Check that the list endpoint respond without errors, returning the expected number of artists.
        """

        response = self.client.get("/bands/artist/?score=[2,")

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.content), {"score": "invalid score value [2, for metric score"})

    def test_create_valid(self) -> None:
        """
        Assert that the test artist is created correctly.
        """

        test_artist = {
            "name": "test-artist-four",
            "spotify_url": "https://test-artist-4.com",
            "image_url": "https://test-artist-4-image.com",
            "this-field": "is-ignored",
        }

        response = self.client.post("/bands/artist/", data=test_artist)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Artist.objects.count(), len(ARTISTS) + 1)

        test_artist.pop("this-field")
        self.assertArtistEqual(Artist.objects.order_by("id").last() or {}, test_artist)

    def test_create_invalid(self) -> None:
        """
        Return a bad response if the input payload is invalid.
        """

        response = self.client.post(
            "/bands/artist/",
            data={
                "spotify_url": "https://test-artist-4.com",
                "image_url": "https://test-artist-4-image.com",
            },
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.content), {"name": ["This field is required."]})

    def test_create_already_existing(self) -> None:
        """
        Return a bad response if the artist already exist.
        """

        response = self.client.post("/bands/artist/", data=ARTISTS[0])

        self.assertEqual(response.status_code, 400)
        self.assertEqual(
            json.loads(response.content),
            {"integrity_error": "(1062, \"Duplicate entry 'test-artist-one' for key 'name'\")"},
        )

    def test_update_valid(self) -> None:
        """
        Assert that the test artist is updated correctly.
        """

        test_artist_update = {
            "name": "test-artist-modified",
            "spotify_url": "https://test-artist-1234.com",
            "image_url": "https://test-artist-1234-image.com",
            "this-field": "is-ignored",
        }
        test_artist_id = 1

        response = self.client.put(
            f"/bands/artist/{test_artist_id}/", data=test_artist_update, content_type="application/json"
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Artist.objects.count(), len(ARTISTS))

        test_artist_update.pop("this-field")
        self.assertArtistEqual(Artist.objects.get(id=test_artist_id), test_artist_update)

    def test_update_invalid(self) -> None:
        """
        Return a bad response if the input payload is invalid.
        """

        response = self.client.put("/bands/artist/1/", data={"name": ""}, content_type="application/json")

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.content), {"name": ["This field may not be blank."]})

    def test_update_already_existing(self) -> None:
        """
        Return a bad response if the artist already exist.
        """

        response = self.client.put(
            "/bands/artist/1/", data={"name": ARTISTS[1]["name"]}, content_type="application/json"
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(
            json.loads(response.content),
            {"integrity_error": "(1062, \"Duplicate entry 'test-artist-two' for key 'name'\")"},
        )

    def test_update_not_found(self) -> None:
        """
        Return 404 if the id is missing.
        """

        response = self.client.put("/bands/artist/10/", data={"name": "test"}, content_type="application/json")

        self.assertEqual(response.status_code, 404)
        self.assertEqual(json.loads(response.content), {"not_found_error": "Artist matching query does not exist."})

    def test_delete_valid(self) -> None:
        """
        Assert that the artist is deleted correctly.
        """

        response = self.client.delete("/bands/artist/1/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Artist.objects.count(), len(ARTISTS))  # soft delete
        self.assertEqual(Artist.objects.filter(deleted_at=None).count(), len(ARTISTS) - 1)
        self.assertIsNotNone(Artist.objects.get(name=ARTISTS[0]["name"]).deleted_at)

    def test_delete_not_found(self) -> None:
        """
        Return 404 if the id is missing.
        """

        response = self.client.delete("/bands/artist/10/")

        self.assertEqual(response.status_code, 404)
        self.assertEqual(json.loads(response.content), {"not_found_error": "Artist matching query does not exist."})
        self.assertEqual(Artist.objects.count(), len(ARTISTS))

    def assertArtistEqual(
        self,
        actual_artist: dict[str, Any] | Artist,
        expected_artist: dict[str, Any] | Artist,
        ignore: tuple = ("id", "created_at", "deleted_at", "scores"),
    ) -> None:
        """
        Compare two artist dict representation.
        """

        actual_artist_dict = model_to_dict(actual_artist) if isinstance(actual_artist, Artist) else actual_artist
        expected_artist_dict = (
            model_to_dict(expected_artist) if isinstance(expected_artist, Artist) else expected_artist
        )

        self.assertEqual(
            {key: value for key, value in actual_artist_dict.items() if key not in ignore}, expected_artist_dict
        )
