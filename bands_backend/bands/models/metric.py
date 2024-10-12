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
    type = PositiveTinyIntegerField(choices=MetricType)
    category = PositiveTinyIntegerField(choices=MetricCategory)

    class Meta:
        """
        Settings.
        """

        db_table = "metric"
