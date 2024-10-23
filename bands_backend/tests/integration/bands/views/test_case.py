from typing import Any

from django.db.models import Model
from django.forms import model_to_dict
from django.test import TestCase as BaseTestCase


class TestCase(BaseTestCase):
    """
    Test case.
    """

    def assert_model_equal(
        self,
        actual_model: dict[str, Any] | Model,
        expected_model: dict[str, Any] | Model,
        ignore: tuple,
    ) -> None:
        """
        Compare two models dict representation.
        """

        actual_model_dict = model_to_dict(actual_model) if isinstance(actual_model, Model) else actual_model
        expected_model_dict = model_to_dict(expected_model) if isinstance(expected_model, Model) else expected_model

        self.assertEqual(
            {key: value for key, value in actual_model_dict.items() if key not in ignore},
            {key: value for key, value in expected_model_dict.items() if key not in ignore},
        )
