from django.db import models
from datetime import datetime


class PositiveAutoField(models.AutoField):
    def db_type(self, connection):
        if connection.settings_dict['ENGINE'] == 'django.db.backends.mysql':
            return 'integer UNSIGNED AUTO_INCREMENT'

    def rel_db_type(self, connection):
        if connection.settings_dict['ENGINE'] == 'django.db.backends.mysql':
            return 'integer UNSIGNED'


class PositiveTinyIntegerField(models.PositiveSmallIntegerField):
    def db_type(self, connection):
        if connection.settings_dict['ENGINE'] == 'django.db.backends.mysql':
            return "tinyint UNSIGNED"
        else:
            return super(PositiveTinyIntegerField, self).db_type(connection)


class SoftDeleteModel(models.Model):
    deleted_at = models.DateTimeField()

    field_order = ["id", "deleted_at"]

    def delete(self, using=None, keep_parents=False):
        self.deleted_at = datetime.now()
        self.save()

    class Meta:
        abstract = True
