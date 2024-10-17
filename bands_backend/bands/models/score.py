from django.core.validators import MinValueValidator
from django.db import models

from bands.models import Artist, Metric
from bands.models_extensions import PositiveAutoField, PositiveTinyIntegerField


class Score(models.Model):
    """
    Score model.
    """

    MAX_SCORE_VALUE = 5

    id = PositiveAutoField(primary_key=True)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, db_column="artist_id")
    metric = models.ForeignKey(Metric, on_delete=models.CASCADE, db_column="metric_id")
    value = PositiveTinyIntegerField(validators=[MinValueValidator(0)])

    class Meta:
        """
        Settings.
        """

        db_table = "score"
        constraints = [
            models.UniqueConstraint("artist_id", "metric_id", name="artist_id_metric_id_unique"),
        ]

    @staticmethod
    def clamp_score_value(value: int) -> int:
        """
        Clamp the input value between 0 and the max score value.
        """

        return min(max(0, value), Score.MAX_SCORE_VALUE)
