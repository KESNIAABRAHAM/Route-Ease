from django.db import models

# Create your models here.
class User(models.Model):
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length = 11)
    password = models.CharField(max_length = 10)
    title = models.CharField(max_length=200)
    body = models.TextField()
    
    
    # def _str_(self):
    #     return f"Post: {self.title}"