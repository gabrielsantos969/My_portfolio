from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='home'),
    path('about_me/', views.about, name="about-me"),
    path('certifications/', views.certifications, name="certifications")
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)