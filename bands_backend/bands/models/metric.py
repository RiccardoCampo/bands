from typing import Type

from django.db import models
from django.utils.translation import gettext_lazy

from bands.models_extensions import PositiveAutoField, PositiveTinyIntegerField, SoftDeleteModel


class Metric(SoftDeleteModel):
    """
    Metric model.
    """

    class MetricType(models.IntegerChoices):
        """
        Metric type enum.
        """

        FLAG = 0, gettext_lazy("flag")
        VALUE = 1, gettext_lazy("value")

    class MetricCategory(models.IntegerChoices):
        """
        Metric type enum.
        """

        SCORE = 0, gettext_lazy("score")
        MAIN_SCORE = 1, gettext_lazy("main_score")
        GENRE = 2, gettext_lazy("genre")
        SUBGENRE = 3, gettext_lazy("subgenre")

    id = PositiveAutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    type = PositiveTinyIntegerField(choices=MetricType, default=0)
    category = PositiveTinyIntegerField(choices=MetricCategory, default=0)

    class Meta:
        """
        Settings.
        """

        db_table = "metric"

    @classmethod
    def enum_fields(cls) -> dict[str, Type[models.IntegerChoices]]:
        """
        Get the enum field and their classes.
        """

        return {"category": cls.MetricCategory, "type": cls.MetricType}
