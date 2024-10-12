from datetime import datetime
from typing import Any

from django.db import models
from django.db.backends.base.base import BaseDatabaseWrapper


class PositiveAutoField(models.AutoField):
    """
    Unsigned autoincrement field.
    """

    def db_type(self, connection: BaseDatabaseWrapper) -> str | None:
        """
        Get the type for the table field.
        """

        if connection.settings_dict["ENGINE"] == "django.db.backends.mysql":
            return "integer UNSIGNED AUTO_INCREMENT"

        return super().db_type(connection)

    def rel_db_type(self, connection: BaseDatabaseWrapper) -> str | None:
        """
        Get the type for related table fields.
        """

        if connection.settings_dict["ENGINE"] == "django.db.backends.mysql":
            return "integer UNSIGNED"

        return models.IntegerField().db_type(connection=connection)


class PositiveTinyIntegerField(models.PositiveSmallIntegerField):
    """
    Unsigned tinyint field.
    """

    def db_type(self, connection: BaseDatabaseWrapper) -> str | None:
        """
        Get the type for the table field.
        """

        if connection.settings_dict["ENGINE"] == "django.db.backends.mysql":
            return "tinyint UNSIGNED"
        else:
            return super(PositiveTinyIntegerField, self).db_type(connection)


class SoftDeleteModel(models.Model):
    """
    A model which soft-deletes element.

    When a model is deleted, it sets deleted_at instead of actually deleting the database entry.
    """

    deleted_at = models.DateTimeField(null=True)

    field_order: list[str] = ["id", "deleted_at"]

    def delete(self, using: Any = None, keep_parents: bool = False) -> tuple[int, dict[str, int]]:
        """
        Soft delete the model.
        """

        self.deleted_at = datetime.now()
        self.save()

        return 1, {self._meta.label: 1}

    class Meta:
        """
        Settings.
        """

        abstract = True
