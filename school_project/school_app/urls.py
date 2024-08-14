# school_app/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, EnquiryViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'enquiries', EnquiryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
