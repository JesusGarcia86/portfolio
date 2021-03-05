from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def spanish(request):
    return render(request, 'spanish.html')