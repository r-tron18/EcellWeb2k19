# Generated by Django 2.2.2 on 2019-07-23 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Speaker',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('company', models.CharField(max_length=256)),
                ('experience', models.IntegerField(blank=True, null=True)),
                ('profile_pic', models.ImageField(blank=True, null=True, upload_to='static/uploads/speakers')),
                ('email', models.EmailField(max_length=254)),
                ('contact', models.TextField(blank=True, max_length=13, null=True)),
                ('description', models.TextField(default='none')),
                ('year', models.IntegerField(default=2019)),
                ('social_media', models.TextField(default='blank')),
                ('flag', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
