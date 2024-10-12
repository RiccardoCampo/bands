from datetime import datetime
from typing import Any

from django.db import models
from django.db.backends.base.base import BaseDatabaseWrapper


class PositiveAutoField(models.AutoField):
    def db_type(self, connection: BaseDatabaseWrapper) -> str | None:
        if connection.settings_dict["ENGINE"] == "django.db.backends.mysql":
            return "integer UNSIGNED AUTO_INCREMENT"

        return super().db_type(connection)

    def rel_db_type(self, connection: BaseDatabaseWrapper) -> str | None:
        if connection.settings_dict["ENGINE"] == "django.db.backends.mysql":
            return "integer UNSIGNED"

        return models.IntegerField().db_type(connection=connection)


class PositiveTinyIntegerField(models.PositiveSmallIntegerField):
    def db_type(self, connection: BaseDatabaseWrapper) -> str | None:
        if connection.settings_dict["ENGINE"] == "django.db.backends.mysql":
            return "tinyint UNSIGNED"
        else:
            return super(PositiveTinyIntegerField, self).db_type(connection)


class SoftDeleteModel(models.Model):
    deleted_at = models.DateTimeField(null=True)

    field_order: list[str] = ["id", "deleted_at"]

    def delete(self, using: Any = None, keep_parents: bool = False) -> tuple[int, dict[str, int]]:
        self.deleted_at = datetime.now()
        self.save()

        return 1, {self._meta.label: 1}

    class Meta:
        abstract = True
