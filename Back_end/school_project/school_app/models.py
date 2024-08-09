from django.db import models

class User(models.Model):
    id = models.CharField(max_length=10, primary_key=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Enquiry(models.Model):
    id = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    dob = models.DateField()
    address = models.TextField()
    course = models.CharField(max_length=100)
    contact_method = models.CharField(max_length=50)
    subject = models.CharField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.subject


class Subject(models.Model):
    name = models.CharField(max_length=50)
    marks = models.IntegerField()

    def __str__(self):
        return self.name


class Student(models.Model):
    roll_number = models.CharField(max_length=20, primary_key=True)
    name = models.CharField(max_length=100)
    cgpa = models.FloatField()
    attendance_percentage = models.FloatField()
    fees_paid = models.DecimalField(max_digits=10, decimal_places=2)
    total_fees = models.DecimalField(max_digits=10, decimal_places=2)
    subjects = models.ManyToManyField(Subject)

    def __str__(self):
        return self.name
