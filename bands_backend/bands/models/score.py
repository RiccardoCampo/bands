from django.core.validators import MinValueValidator
from django.db import models

from bands.models import Artist, Metric
from bands.models_extensions import PositiveAutoField, PositiveTinyIntegerField


class Score(models.Model):
    id = PositiveAutoField(primary_key=True)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, db_column="artist_id")
    metric = models.ForeignKey(Metric, on_delete=models.CASCADE, db_column="metric_id")
    value = PositiveTinyIntegerField(validators=[MinValueValidator(0)])

    class Meta:
        db_table = "score"
        constraints = [
            models.UniqueConstraint("artist_id", "metric_id", name="artist_id_metric_id_unique"),
        ]
