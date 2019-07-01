# Generated by Django 2.2.2 on 2019-06-19 19:03

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
                ('name', models.CharField(max_length=64)),
                ('company', models.CharField(max_length=128)),
                ('experience', models.IntegerField(default=0)),
                ('email', models.EmailField(max_length=64, unique=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('verified', models.BooleanField(default=False)),
                ('contact', models.CharField(max_length=10)),
                ('profile_pic', models.ImageField(blank=True, null=True, upload_to='static/uploads/speakers')),
                ('social_media', models.TextField(blank=True, null=True)),
                ('year', models.IntegerField(default=2019)),
            ],
        ),
    ]