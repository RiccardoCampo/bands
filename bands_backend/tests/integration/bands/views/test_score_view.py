import json

from bands.models import Artist, Metric, Score
from tests.integration.bands.data import ARTISTS, METRICS, SCORES
from tests.integration.bands.views.test_case import TestCase


class TestScoreViewSet(TestCase):
    """
    MetricViewSet unit tests.
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

    def test_create_valid(self) -> None:
        """
        Assert that the test score is created correctly.
        """

        test_score = {
            "artist_id": 2,
            "metric_id": 2,
            "value": 3,
            "this-field": "is-ignored",
        }

        response = self.client.post("/bands/score/", data=test_score)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Score.objects.count(), len(SCORES) + 1)

        test_score.pop("this-field")
        test_score["artist"] = test_score.pop("artist_id")
        test_score["metric"] = test_score.pop("metric_id")
        self.assert_model_equal(Score.objects.order_by("id").last() or {}, test_score, ("id",))

    def test_create_invalid(self) -> None:
        """
        Return a bad response if the input payload is invalid.
        """

        response = self.client.post(
            "/bands/score/",
            data={
                "artist_id": 1,
                "metric_id": 1,
                "value": 20,
            },
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(
            json.loads(response.content),
            {"value": ["Ensure this value is less than or equal to 5."]},
        )

    def test_create_already_existing(self) -> None:
        """
        Return a bad response if the score already exist.
        """

        response = self.client.post("/bands/score/", data=SCORES[0])

        self.assertEqual(response.status_code, 400)
        self.assertIn(
            "Duplicate entry '1-1' for key",
            json.loads(response.content).get("integrity_error"),
        )

    def test_update_valid(self) -> None:
        """
        Assert that the test score is updated correctly.
        """

        test_score_update = {
            "value": 3,
            "this-field": "is-ignored",
        }
        test_score_id = 1

        response = self.client.put(
            f"/bands/score/{test_score_id}/", data=test_score_update, content_type="application/json"
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Score.objects.count(), len(SCORES))

        test_score_update.pop("this-field")
        self.assertEqual(Score.objects.get(id=test_score_id).value, test_score_update["value"])

    def test_update_invalid(self) -> None:
        """
        Return a bad response if the input payload is invalid.
        """

        response = self.client.put("/bands/score/1/", data={"value": ""}, content_type="application/json")

        self.assertEqual(response.status_code, 400)
        self.assertEqual(json.loads(response.content), {"value": ["A valid integer is required."]})

    def test_update_not_found(self) -> None:
        """
        Return 404 if the id is missing.
        """

        response = self.client.put(
            f"/bands/score/{len(SCORES) + 1}/", data={"value": 5}, content_type="application/json"
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(json.loads(response.content), {"not_found_error": "Score matching query does not exist."})

    def test_delete_valid(self) -> None:
        """
        Assert that the score is deleted correctly.
        """

        test_id = Metric.objects.all()[0].id

        response = self.client.delete(f"/bands/score/{test_id}/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Score.objects.count(), len(SCORES) - 1)
        self.assertIsNone(Score.objects.filter(id=test_id).first())

    def test_delete_not_found(self) -> None:
        """
        Return 404 if the id is missing.
        """

        response = self.client.delete(f"/bands/score/{len(SCORES) + 1}/")

        self.assertEqual(response.status_code, 404)
        self.assertEqual(json.loads(response.content), {"not_found_error": "Score matching query does not exist."})
        self.assertEqual(Score.objects.count(), len(SCORES))

    def test_bulk_upsert_valid(self) -> None:
        """
        Assert that the test scores are created or updated correctly.
        """

        test_score_1_id = 1
        test_score_1_new_value = 3
        test_score_2_id = 2
        test_score_2_new_value = 4
        test_score_updates = {
            "updates": [
                {"id": test_score_1_id, "value": test_score_1_new_value},
                {"id": test_score_2_id, "value": test_score_2_new_value},
                {"artist_id": 2, "metric_id": 2, "value": 2},
            ]
        }

        response = self.client.put(
            "/bands/score/bulk-upsert/", data=test_score_updates, content_type="application/json"
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Score.objects.count(), len(SCORES) + 1)

        self.assertEqual(Score.objects.get(id=test_score_1_id).value, test_score_1_new_value)
        self.assertEqual(Score.objects.get(id=test_score_2_id).value, test_score_2_new_value)

    def test_bulk_upsert_invalid(self) -> None:
        """
        Return a bad response if the input payload is invalid.
        """

        for payload in [
            {
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
            },
        ]:
            response = self.client.put("/bands/score/bulk-upsert/", data=payload, content_type="application/json")

            self.assertEqual(response.status_code, 400)

    def test_bulk_upsert_not_found(self) -> None:
        """
        Return 404 if one of the ids is missing. Successful updates are rolled back.
        """

        response = self.client.put(
            f"/bands/score/{len(SCORES) + 1}/", data={"value": 5}, content_type="application/json"
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(json.loads(response.content), {"not_found_error": "Score matching query does not exist."})

        test_score_1_id = 1
        test_score_1_new_value = 3
        test_score_2_id = 20000
        test_score_2_new_value = 4
        test_score_updates = {
            "updates": [
                {"id": test_score_1_id, "value": test_score_1_new_value},
                {"id": test_score_2_id, "value": test_score_2_new_value},
            ]
        }

        response = self.client.put(
            "/bands/score/bulk-upsert/", data=test_score_updates, content_type="application/json"
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(json.loads(response.content), {"not_found_error": "Score matching query does not exist."})

        self.assertNotEqual(Score.objects.get(id=test_score_1_id).value, test_score_1_new_value)
