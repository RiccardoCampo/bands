from datetime import datetime
from typing import Union

from django.db import models
from django.db.backends.base.base import BaseDatabaseWrapper


class PositiveAutoField(models.AutoField):
    def db_type(self, connection: BaseDatabaseWrapper) -> Union[str, None]:
        if connection.settings_dict["ENGINE"] == "django.db.backends.mysql":
            return "integer UNSIGNED AUTO_INCREMENT"
        return super().db_type(connection)


class PositiveTinyIntegerField(models.PositiveSmallIntegerField):
    def db_type(self, connection: BaseDatabaseWrapper) -> Union[str, None]:
        if connection.settings_dict["ENGINE"] == "django.db.backends.mysql":
            return "tinyint UNSIGNED"
        else:
            return super(PositiveTinyIntegerField, self).db_type(connection)


class SoftDeleteModel(models.Model):
    deleted_at = models.DateTimeField(null=True)

    field_order = ["id", "deleted_at"]

    def delete(self, using=None, keep_parents: bool = False) -> None:
        self.deleted_at = datetime.now()
        self.save()

    class Meta:
        abstract = True
