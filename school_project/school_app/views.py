# school_app/views.py

from rest_framework import viewsets
from .models import User, Enquiry
from .serializers import UserSerializer, EnquirySerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EnquiryViewSet(viewsets.ModelViewSet):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer
