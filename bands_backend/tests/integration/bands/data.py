ARTISTS: list[dict[str, str | int]] = [
    {
        "id": 1,
        "name": "test-artist-one",
        "spotify_url": "https://test-artist-1.com",
        "image_url": "https://test-artist-1-image.com",
        "rating": 5,
    },
    {
        "id": 2,
        "name": "test-artist-two",
        "spotify_url": "https://test-artist-2.com",
        "image_url": "https://test-artist-2-image.com",
        "rating": 4,
    },
    {
        "id": 3,
        "name": "test-artist-three",
        "spotify_url": "https://test-artist-3.com",
        "image_url": "https://test-artist-3-image.com",
        "rating": 3,
    },
]

METRICS: list[dict[str, str | int]] = [
    {
        "id": 1,
        "name": "test-genre-1",
        "type": 1,
        "category": 2,
    },
    {
        "id": 2,
        "name": "test-genre-2",
        "type": 1,
        "category": 2,
    },
    {
        "id": 3,
        "name": "test-subgenre",
        "type": 1,
        "category": 2,
    },
    {
        "id": 4,
        "name": "test-value-metric",
        "type": 1,
        "category": 0,
    },
    {
        "id": 5,
        "name": "test-flag-metric",
        "type": 0,
        "category": 0,
    },
]

SCORES: list[dict[str, str | int]] = [
    {
        "id": 1,
        "artist_id": "1",
        "metric_id": "1",
        "value": 3,
    },
    {
        "id": 2,
        "artist_id": "2",
        "metric_id": "2",
        "value": 4,
    },
    {
        "id": 3,
        "artist_id": "1",
        "metric_id": "5",
        "value": 1,
    },
]
