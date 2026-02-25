import json
from typing import Any

import pytest
from django.test import Client
from syrupy.filters import paths

from bands.models import Artist
from tests.bands.data import ARTISTS


def test_list_valid(client: Client, snapshot: Any) -> None:
    response = client.get("/bands/artist/?page=1&name=artist-t&rating=[3,]")

    assert response.status_code == 200
    assert json.loads(response.content) == snapshot(exclude=paths("results.0.created_at", "results.1.created_at"))


def test_list_invalid(client: Client) -> None:
    response = client.get("/bands/artist/?score=[2,")

    assert response.status_code == 400
    assert json.loads(response.content) == {"score": "invalid score value [2, for metric score"}


def test_retrieve_valid(client: Client, snapshot: Any) -> None:
    test_artist_id = 1

    response = client.get(f"/bands/artist/{test_artist_id}/")

    assert response.status_code == 200
    assert json.loads(response.content) == snapshot(exclude=paths("created_at"))


@pytest.mark.parametrize(
    "query_string,artist_ids",
    [
        pytest.param("name=test-artist-one", [1], id="name"),
        pytest.param("name=test-artist-on", [1], id="name-partial"),
        pytest.param("name=test-artist-four", [], id="name-empty"),
        pytest.param("rating=4", [2], id="rating-value"),
        pytest.param("rating=1", [], id="rating-value-empty"),
        pytest.param("rating=[3,4]", [2, 3], id="rating-range"),
        pytest.param("rating=[1,2]", [], id="rating-range-empty"),
        pytest.param("test-genre-2=4", [2], id="one-score-one-value"),
        pytest.param("test-genre-2=5", [], id="one-score-one-value-empty"),
        pytest.param("test-genre-1=[3,4]", [1, 2], id="score-range"),
        pytest.param("test-genre-1=[1,2]", [], id="score-range-empty"),
        pytest.param("test-genre-1=3&test-flag-metric=1", [1], id="multiple-scores"),
        pytest.param("name=test-artist-one&test-genre-1=3", [1], id="score-and-name"),
    ]
)
def test_list_parameters(client: Client, query_string: str, artist_ids: list[int]) -> None:
    response = client.get(f"/bands/artist/?{query_string}")

    assert response.status_code == 200
    results = json.loads(response.content)["results"]
    assert [result["id"] for result in results] == artist_ids


def test_retrieve_not_found(client: Client) -> None:
    response = client.get("/bands/artist/10/")

    assert response.status_code == 404
    assert json.loads(response.content) == {"not_found_error": "Artist matching query does not exist."}


def test_create_valid(client: Client, snapshot: Any) -> None:
    test_artist = {
        "name": "test-artist-four",
        "link_url": "https://test-artist-4.com",
        "image_url": "https://test-artist-4-image.com",
        "rating": 4,
        "this-field": "is-ignored",
    }

    response = client.post("/bands/artist/", data=test_artist)

    assert response.status_code == 200
    assert Artist.objects.count() == len(ARTISTS) + 1
    assert json.loads(response.content) == snapshot(exclude=paths("created_at"))


def test_create_invalid(client: Client) -> None:
    response = client.post(
        "/bands/artist/",
        data={
            "link_url": "https://test-artist-4.com",
            "image_url": "https://test-artist-4-image.com",
        },
    )

    assert response.status_code == 400
    assert json.loads(response.content) == {"name": ["This field is required."]}


def test_create_already_existing(client: Client) -> None:
    response = client.post("/bands/artist/", data=ARTISTS[0])

    assert response.status_code == 400
    assert "integrity_error" in json.loads(response.content)


def test_update_valid(client: Client, snapshot: Any) -> None:
    test_artist_update = {
        "name": "test-artist-modified",
        "link_url": "https://test-artist-1234.com",
        "image_url": "https://test-artist-1234-image.com",
        "rating": 1,
        "this-field": "is-ignored",
    }
    test_artist_id = 1

    response = client.put(
        f"/bands/artist/{test_artist_id}/", data=test_artist_update, content_type="application/json"
    )

    assert response.status_code == 200
    assert Artist.objects.count() == len(ARTISTS)
    assert json.loads(response.content) == snapshot(exclude=paths("created_at"))

    db_artist = Artist.objects.get(id=test_artist_id)
    assert db_artist.name == test_artist_update["name"]
    assert db_artist.link_url == test_artist_update["link_url"]
    assert db_artist.image_url == test_artist_update["image_url"]
    assert db_artist.rating == test_artist_update["rating"]


def test_update_invalid(client: Client) -> None:
    response = client.put("/bands/artist/1/", data={"name": ""}, content_type="application/json")

    assert response.status_code == 400
    assert json.loads(response.content) == {"name": ["This field may not be blank."]}


def test_update_already_existing(client: Client) -> None:
    response = client.put(
        "/bands/artist/1/", data={"name": ARTISTS[1]["name"]}, content_type="application/json"
    )

    assert response.status_code == 400
    assert "integrity_error" in json.loads(response.content)


def test_update_not_found(client: Client) -> None:
    response = client.put("/bands/artist/10/", data={"name": "test"}, content_type="application/json")

    assert response.status_code == 404
    assert json.loads(response.content) == {"not_found_error": "Artist matching query does not exist."}


def test_delete_valid(client: Client, snapshot: Any) -> None:
    test_artist_id = 1
    response = client.delete(f"/bands/artist/{test_artist_id}/")

    assert response.status_code == 200
    assert Artist.objects.count() == len(ARTISTS)
    assert json.loads(response.content) == snapshot

    db_artist = Artist.objects.get(id=test_artist_id)
    assert db_artist.deleted_at is not None


def test_delete_not_found(client: Client) -> None:
    response = client.delete("/bands/artist/10/")

    assert response.status_code == 404
    assert json.loads(response.content) == {"not_found_error": "Artist matching query does not exist."}


def test_get_similar_artists_empty(client: Client) -> None:
    response = client.get("/bands/artist/10000/similar/")

    assert response.status_code == 200
    assert json.loads(response.content) == []


def test_get_similar_artists(client: Client, snapshot: Any) -> None:
    response = client.get("/bands/artist/1/similar/")

    assert response.status_code == 200
    assert json.loads(response.content) == snapshot(exclude=paths("0.created_at"))
