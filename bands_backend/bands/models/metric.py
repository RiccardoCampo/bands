from typing import Type

from django.db import models
from django.utils.translation import gettext_lazy

from bands.models_extensions import PositiveAutoField, PositiveTinyIntegerField, SoftDeleteModel


class Metric(SoftDeleteModel):
    class MetricType(models.IntegerChoices):
        FLAG = 0, gettext_lazy("flag")
        VALUE = 1, gettext_lazy("value")

    id = PositiveAutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    type = PositiveTinyIntegerField(choices=MetricType, default=0)
    category = models.CharField(max_length=255)

    class Meta:
        db_table = "metric"

    @classmethod
    def enum_fields(cls) -> dict[str, Type[models.IntegerChoices]]:
        return {"type": cls.MetricType}
