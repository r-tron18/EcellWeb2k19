# Generated by Django 2.2.2 on 2019-07-20 16:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0002_auto_20190719_1049'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='static/uploads/team'),
        ),
    ]
