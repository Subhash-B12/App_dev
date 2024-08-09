from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, EnquiryViewSet, StudentViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'enquiries', EnquiryViewSet)
router.register(r'students', StudentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
