# Generated by Django 5.0.4 on 2024-05-25 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_conversation_messages'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='conversation',
            name='messages',
        ),
        migrations.AddField(
            model_name='conversation',
            name='messages',
            field=models.ManyToManyField(null=True, to='api.chatmessage'),
        ),
    ]
