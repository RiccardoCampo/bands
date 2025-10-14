import json
from typing import Any

import pytest
from django.test import Client

from bands.models import Metric, Score
from tests.bands.data import SCORES


def test_create_valid(client: Client, snapshot: Any) -> None:
    test_score = {
        "artist_id": 1,
        "metric_id": 2,
        "value": 3,
        "this-field": "is-ignored",
    }

    response = client.post("/bands/score/", data=test_score)

    assert response.status_code == 200
    assert Score.objects.count() == len(SCORES) + 1
    assert json.loads(response.content) == snapshot


def test_create_invalid(client: Client) -> None:
    response = client.post(
        "/bands/score/",
        data={
            "artist_id": 1,
            "metric_id": 1,
            "value": 20,
        },
    )

    assert response.status_code == 400
    assert json.loads(response.content) == {"value": ["Ensure this value is less than or equal to 5."]}


def test_create_already_existing(client: Client) -> None:
    response = client.post("/bands/score/", data=SCORES[0])

    assert response.status_code == 400
    assert "integrity_error" in json.loads(response.content)


def test_update_valid(client: Client, snapshot: Any) -> None:
    test_score_update = {
        "value": 3,
        "this-field": "is-ignored",
    }
    test_score_id = 1

    response = client.put(
        f"/bands/score/{test_score_id}/", data=test_score_update, content_type="application/json"
    )

    assert response.status_code == 200
    assert Score.objects.count() == len(SCORES)
    assert Score.objects.get(id=test_score_id).value == test_score_update["value"]
    assert json.loads(response.content) == snapshot


def test_update_invalid(client: Client) -> None:
    response = client.put("/bands/score/1/", data={"value": ""}, content_type="application/json")

    assert response.status_code == 400
    assert json.loads(response.content) == {"value": ["A valid integer is required."]}


def test_update_not_found(client: Client) -> None:
    response = client.put(
        f"/bands/score/{len(SCORES) + 1}/", data={"value": 5}, content_type="application/json"
    )

    assert response.status_code == 404
    assert json.loads(response.content) == {"not_found_error": "Score matching query does not exist."}


def test_delete_valid(client: Client, snapshot: Any) -> None:
    test_id = Metric.objects.all()[0].id

    response = client.delete(f"/bands/score/{test_id}/")

    assert response.status_code == 200
    assert Score.objects.count() == len(SCORES) - 1
    assert Score.objects.filter(id=test_id).first() is None
    assert json.loads(response.content) == snapshot


def test_delete_not_found(client: Client) -> None:
    response = client.delete(f"/bands/score/{len(SCORES) + 1}/")

    assert response.status_code == 404
    assert json.loads(response.content) == {"not_found_error": "Score matching query does not exist."}
    assert Score.objects.count() == len(SCORES)


def test_bulk_upsert_valid(client: Client, snapshot: Any) -> None:
    test_score_1_id = 1
    test_score_1_new_value = 3
    test_score_2_id = 2
    test_score_2_new_value = 4
    test_score_updates = {
        "updates": [
            {"id": test_score_1_id, "value": test_score_1_new_value},
            {"id": test_score_2_id, "value": test_score_2_new_value},
            {"artist_id": 1, "metric_id": 2, "value": 1},
        ]
    }

    response = client.put(
        "/bands/score/bulk-upsert/", data=test_score_updates, content_type="application/json"
    )

    assert response.status_code == 200
    assert Score.objects.count() == len(SCORES) + 1
    assert Score.objects.get(id=test_score_1_id).value == test_score_1_new_value
    assert Score.objects.get(id=test_score_2_id).value == test_score_2_new_value
    assert json.loads(response.content) == snapshot


@pytest.mark.parametrize("payload", [{
            "updates": [
                {"value": 2},
            ]
        },
        {
            "updates": [
                {
                    "id": 1,
                },
            ]
        },
        {},
        {
            "updates": [
                {"artist_id": 1, "value": 2},
            ]
        },
        {
            "updates": [
                {"metric_id": 1, "value": 2},
            ]
        }])
def test_bulk_upsert_invalid(client: Client, payload: dict) -> None:
    response = client.put("/bands/score/bulk-upsert/", data=payload, content_type="application/json")
    assert response.status_code == 400


def test_bulk_upsert_not_found(client: Client) -> None:
    response = client.put(
        f"/bands/score/{len(SCORES) + 1}/", data={"value": 5}, content_type="application/json"
    )

    assert response.status_code == 404
    assert json.loads(response.content) == {"not_found_error": "Score matching query does not exist."}

    test_score_1_id = 1
    test_score_1_new_value = 5
    test_score_2_id = 20000
    test_score_2_new_value = 4
    test_score_updates = {
        "updates": [
            {"id": test_score_1_id, "value": test_score_1_new_value},
            {"id": test_score_2_id, "value": test_score_2_new_value},
        ]
    }

    response = client.put(
        "/bands/score/bulk-upsert/", data=test_score_updates, content_type="application/json"
    )

    assert response.status_code == 404
    assert json.loads(response.content) == {"not_found_error": "Score matching query does not exist."}

    assert Score.objects.get(id=test_score_1_id).value != test_score_1_new_value
