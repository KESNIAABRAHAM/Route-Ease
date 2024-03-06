from django.shortcuts import render
from django.views.decorators.http import POST
# Create your views here.

def index(request):
     
     return render(request, 'dist/index.html')
             