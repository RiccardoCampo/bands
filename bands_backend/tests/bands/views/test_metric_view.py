import json
from typing import Any

from django.test import Client
from syrupy.filters import paths

from bands.models import Metric
from tests.bands.data import METRICS


def test_list_valid(client: Client, snapshot: Any) -> None:
    response = client.get("/bands/metric/")

    assert response.status_code == 200
    assert json.loads(response.content) == snapshot(exclude=paths("json.loads(response.content).0.created_at"))


def test_create_valid(client: Client, snapshot: Any) -> None:
    test_metric = {
        "name": "test-metric",
        "type": "value",
        "category": "genre",
        "this-field": "is-ignored",
    }

    response = client.post("/bands/metric/", data=test_metric)

    assert response.status_code == 200
    assert Metric.objects.count() == len(METRICS) + 1
    assert json.loads(response.content) == snapshot(exclude=paths("created_at"))


def test_create_invalid(client: Client) -> None:
    response = client.post(
        "/bands/metric/",
        data={
            "type": "invalid-type",
        },
    )

    assert response.status_code == 400
    assert json.loads(response.content) == {
        "name": ["This field is required."],
        "category": ["This field is required."],
        "type": ['"invalid-type" is not a valid choice.'],
    }


def test_create_already_existing(client: Client) -> None:
    response = client.post("/bands/metric/", data={
        "name": METRICS[0]['name'],
        "type": "value",
        "category": "genre",
        "this-field": "is-ignored",
    })

    assert response.status_code == 400
    assert "integrity_error" in json.loads(response.content)


def test_update_valid(client: Client, snapshot: Any) -> None:
    test_metric_update = {
        "name": "test-metric",
        "type": "flag",
        "category": "genre2",
        "this-field": "is-ignored",
    }
    test_metric_id = Metric.objects.all()[0].id

    response = client.put(
        f"/bands/metric/{test_metric_id}/", data=test_metric_update, content_type="application/json"
    )

    assert response.status_code == 200
    assert json.loads(response.content) == snapshot(exclude=paths("created_at"))

    db_metric = Metric.objects.get(id=test_metric_id)
    assert db_metric.name == test_metric_update["name"]
    assert db_metric.category == test_metric_update["category"]


def test_update_invalid(client: Client) -> None:
    response = client.put("/bands/metric/1/", data={"name": ""}, content_type="application/json")

    assert response.status_code == 400
    assert json.loads(response.content) == {"name": ["This field may not be blank."]}


def test_update_already_existing(client: Client) -> None:
    response = client.put(
        f"/bands/metric/{Metric.objects.all()[0].id}/",
        data={"name": METRICS[1]["name"]},
        content_type="application/json",
    )

    assert response.status_code == 400
    assert "integrity_error" in json.loads(response.content)


def test_update_not_found(client: Client) -> None:
    response = client.put(
        f"/bands/metric/{len(METRICS) + 1 + 1}/", data={"name": "test"}, content_type="application/json"
    )

    assert response.status_code == 404
    assert json.loads(response.content) == {"not_found_error": "Metric matching query does not exist."}


def test_delete_valid(client: Client, snapshot: Any) -> None:
    test_metric_id = Metric.objects.all()[0].id

    response = client.delete(f"/bands/metric/{test_metric_id}/")

    assert response.status_code == 200
    assert Metric.objects.count() == len(METRICS)

    db_metric = Metric.objects.get(id=test_metric_id)
    assert db_metric.deleted_at is not None
    assert json.loads(response.content) == snapshot()


def test_delete_not_found(client: Client) -> None:
    response = client.delete(f"/bands/metric/{len(METRICS) + 1 + 1}/")

    assert response.status_code == 404
    assert json.loads(response.content) == {"not_found_error": "Metric matching query does not exist."}
