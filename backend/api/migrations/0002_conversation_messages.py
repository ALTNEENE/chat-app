# Generated by Django 5.0.4 on 2024-05-25 08:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='conversation',
            name='messages',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.chatmessage'),
        ),
    ]
