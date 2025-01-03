import json
from typing import Any

from django.forms import model_to_dict

from bands.models import Metric
from tests.integration.bands.data import METRICS
from tests.integration.bands.views.test_case import TestCase


class TestMetricViewSet(TestCase):
    """
    MetricViewSet unit tests.
    """

    @classmethod
    def setUpTestData(cls) -> None:
        """
        Fill the database.
        """

        for metric in METRICS:
            Metric.objects.create(**metric)

    def test_list_valid(self) -> None:
        """
        Check that the list endpoint respond without errors, returning the expected number of metrics.
        """

        response = self.client.get("/bands/metric/")

        self.assertEqual(response.status_code, 200)

        results = json.loads(response.content)
        self.assertEqual(len(results), len(METRICS))
        for idx, actual_metric in enumerate(results):
            self.assert_metric_equal(actual_metric, self.normalize_metric_enums(METRICS[idx]))

    def test_create_valid(self) -> None:
        """
        Assert that the test metric is created correctly.
        """

        test_metric = {
            "name": "test-metric",
            "type": "value",
            "category": "genre",
            "this-field": "is-ignored",
        }

        response = self.client.post("/bands/metric/", data=test_metric)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Metric.objects.count(), len(METRICS) + 1)

        test_metric.pop("this-field")
        self.assert_metric_equal(Metric.objects.order_by("id").last() or {}, test_metric)

    def test_create_invalid(self) -> None:
        """
        Return a bad response if the input payload is invalid.
        """

        response = self.client.post(
            "/bands/metric/",
            data={
                "type": "invalid-type",
                "category": "invalid-category",
            },
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(
            json.loads(response.content),
            {
                "name": ["This field is required."],
                "type": ['"invalid-type" is not a valid choice.'],
                "category": ['"invalid-category" is not a valid choice.'],
            },
        )

    def test_create_already_existing(self) -> None:
        """
        Return a bad response if the metric already exist.
        """

        response = self.client.post("/bands/metric/", data=self.normalize_metric_enums(METRICS[0]))

        self.assertEqual(response.status_code, 400)
        self.assertIn(
            f"Duplicate entry '{METRICS[0]['name']}' for key",
            json.loads(response.content).get("integrity_error"),
        )

    def test_update_valid(self) -> None:
        """
        Assert that the test metric is updated correctly.
        """

        test_metric_update = {
            "name": "test-metric",
            "type": "flag",
            "category": "genre",
            "this-field": "is-ignored",
        }
        test_metric_id = Metric.objects.all()[0].id

        response = self.client.put(
            f"/bands/metric/{test_metric_id}/", data=test_metric_update, content_type="application/json"
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Metric.objects.count(), len(METRICS))

        test_metric_update.pop("this-field")
        self.assert_metric_equal(Metric.objects.get(id=test_metric_id), test_metric_update)

    def test_update_invalid(self) -> None:
        """
        Return a bad response if the input payload is invalid.
        """

        response = self.client.put("/bands/metric/1/", data={"name": ""}, content_type="application/json")

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.content), {"name": ["This field may not be blank."]})

    def test_update_already_existing(self) -> None:
        """
        Return a bad response if the metric already exist.
        """

        response = self.client.put(
            f"/bands/metric/{Metric.objects.all()[0].id}/",
            data={"name": METRICS[1]["name"]},
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 400)
        self.assertIn(
            f"Duplicate entry '{METRICS[1]['name']}' for key",
            json.loads(response.content).get("integrity_error"),
        )

    def test_update_not_found(self) -> None:
        """
        Return 404 if the id is missing.
        """

        response = self.client.put(
            f"/bands/metric/{len(METRICS) + 1}/", data={"name": "test"}, content_type="application/json"
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(json.loads(response.content), {"not_found_error": "Metric matching query does not exist."})

    def test_delete_valid(self) -> None:
        """
        Assert that the metric is deleted correctly.
        """

        test_id = Metric.objects.all()[0].id

        response = self.client.delete(f"/bands/metric/{test_id}/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Metric.objects.count(), len(METRICS))  # soft delete
        self.assertEqual(Metric.objects.filter(deleted_at=None).count(), len(METRICS) - 1)
        self.assertIsNotNone(Metric.objects.get(id=test_id).deleted_at)

    def test_delete_not_found(self) -> None:
        """
        Return 404 if the id is missing.
        """

        response = self.client.delete(f"/bands/metric/{len(METRICS) + 1}/")

        self.assertEqual(response.status_code, 404)
        self.assertEqual(json.loads(response.content), {"not_found_error": "Metric matching query does not exist."})
        self.assertEqual(Metric.objects.count(), len(METRICS))

    def assert_metric_equal(
        self,
        actual_metric: dict[str, Any] | Metric,
        expected_metric: dict[str, Any] | Metric,
        ignore: tuple = ("id", "deleted_at"),
    ) -> None:
        """
        Compare two metric dict representation.
        """

        actual_metric_dict = (
            self.normalize_metric_enums(model_to_dict(actual_metric))
            if isinstance(actual_metric, Metric)
            else actual_metric
        )
        expected_metric_dict = (
            self.normalize_metric_enums(model_to_dict(expected_metric))
            if isinstance(expected_metric, Metric)
            else expected_metric
        )

        self.assert_model_equal(actual_metric_dict, expected_metric_dict, ignore)

    @staticmethod
    def normalize_metric_enums(metric_dict: dict[str, Any]) -> dict[str, Any]:
        """
        Make sure that the metric dict contains the string value for type and category enums.
        """

        metric_dict = {**metric_dict}

        for enum_key, enum_class in Metric.enum_fields().items():
            if (enum_value := metric_dict.get(enum_key)) is not None:
                metric_dict[enum_key] = str(enum_class(enum_value).label)

        return metric_dict
