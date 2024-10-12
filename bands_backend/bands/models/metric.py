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

    id = PositiveAutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    type = PositiveTinyIntegerField(choices=MetricType)

    class Meta:
        """
        Settings.
        """

        db_table = "metric"
