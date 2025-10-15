
from rest_framework import generics
from .models import ContactMessage
from .serializers import ContactMessageSerializer

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
# contact/views.py (inside post method override)
from django.core.mail import send_mail

def perform_create(self, serializer):
    message = serializer.save()
    send_mail(
        subject=f"New contact message from {message.name}",
        message=f"{message.subject}\n\n{message.message}",
        from_email=message.email,
        recipient_list=['sebika.nepal4@gmail.com'],
    )
