from django.db import models
from django.utils.translation import gettext_lazy

from bands.models_extensions import SoftDeleteModel, PositiveAutoField, PositiveTinyIntegerField


class Metric(SoftDeleteModel):
    class MetricType(models.IntegerChoices):
        FLAG = 0, gettext_lazy("flag")
        VALUE = 1, gettext_lazy("value")

    id = PositiveAutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    type = PositiveTinyIntegerField(choices=MetricType)

    class Meta:
        db_table = "metric"
