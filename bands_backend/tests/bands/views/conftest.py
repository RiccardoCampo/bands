from typing import Any

import pytest
from django.test import Client

from bands.models import Artist, Metric, Score
from tests.bands.data import ARTISTS, METRICS, SCORES


@pytest.fixture(autouse=True)
def setup_test_data(db: Any) -> None:
    for artist in ARTISTS:
        Artist.objects.create(**artist)

    for metric in METRICS:
        Metric.objects.create(**metric)

    for score in SCORES:
        Score.objects.create(**score)


@pytest.fixture
def client() -> Client:
    return Client()
