# school_app/admin.py

from django.contrib import admin
from .models import User, Enquiry

admin.site.register(User)
admin.site.register(Enquiry)
