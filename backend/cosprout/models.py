from django.contrib.auth.models import AbstractUser
from django.db import models

class Applicant(AbstractUser):
    num_group_members = models.IntegerField(default=0)