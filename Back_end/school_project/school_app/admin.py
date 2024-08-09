from django.contrib import admin
from .models import User, Enquiry, Student, Subject

# Register your models here
admin.site.register(User)
admin.site.register(Enquiry)
admin.site.register(Student)
admin.site.register(Subject)
