ARTISTS: list[dict[str, str]] = [
    {
        "name": "test-artist-one",
        "spotify_url": "https://test-artist-1.com",
        "image_url": "https://test-artist-1-image.com",
    },
    {
        "name": "test-artist-two",
        "spotify_url": "https://test-artist-2.com",
        "image_url": "https://test-artist-2-image.com",
    },
    {
        "name": "test-artist-three",
        "spotify_url": "https://test-artist-3.com",
        "image_url": "https://test-artist-3-image.com",
    },
]

METRICS: list[dict[str, str | int]] = [
    {
        "name": "score",
        "type": 1,
        "category": 1,
    },
    {
        "name": "test-genre-1",
        "type": 1,
        "category": 2,
    },
    {
        "name": "test-genre-2",
        "type": 1,
        "category": 2,
    },
    {
        "name": "test-subgenre",
        "type": 1,
        "category": 2,
    },
    {
        "name": "test-value-metric",
        "type": 1,
        "category": 0,
    },
    {
        "name": "test-flag-metric",
        "type": 0,
        "category": 0,
    },
]

SCORES: list[dict[str, str | int]] = [
    {
        "artist_id": "1",
        "metric_id": "1",
        "value": 5,
    },
    {
        "artist_id": "2",
        "metric_id": "1",
        "value": 4,
    },
    {
        "artist_id": "3",
        "metric_id": "1",
        "value": 3,
    },
    {
        "artist_id": "1",
        "metric_id": "2",
        "value": 3,
    },
    {
        "artist_id": "2",
        "metric_id": "3",
        "value": 4,
    },
    {
        "artist_id": "1",
        "metric_id": "6",
        "value": 1,
    },
]
