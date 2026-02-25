ARTISTS: list[dict[str, str | int]] = [
    {
        "id": 1,
        "name": "test-artist-one",
        "link_url": "https://test-artist-1.com",
        "image_url": "https://test-artist-1-image.com",
        "rating": 5,
    },
    {
        "id": 2,
        "name": "test-artist-two",
        "link_url": "https://test-artist-2.com",
        "image_url": "https://test-artist-2-image.com",
        "rating": 4,
    },
    {
        "id": 3,
        "name": "test-artist-three",
        "link_url": "https://test-artist-3.com",
        "image_url": "https://test-artist-3-image.com",
        "rating": 3,
    },
]

METRICS: list[dict[str, str | int]] = [
    {
        "id": 1,
        "name": "test-genre-1",
        "type": 1,
        "category": "genre",
    },
    {
        "id": 2,
        "name": "test-genre-2",
        "type": 1,
        "category": "genre",
    },
    {
        "id": 3,
        "name": "test-subgenre",
        "type": 1,
        "category": "genre",
    },
    {
        "id": 4,
        "name": "test-value-metric",
        "type": 1,
        "category": "score",
    },
    {
        "id": 5,
        "name": "test-flag-metric",
        "type": 0,
        "category": "score",
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
    {
        "id": 4,
        "artist_id": "2",
        "metric_id": "1",
        "value": 3,
    },
]
