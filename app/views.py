from django.shortcuts import render

# Create your views here.


def home(request):
    return render(request, "app/home.html")


def about(request):
    return render(request, "app/about.html")


def services(request):
    return render(request, "app/services.html")


def contact(request):
    return render(request, "app/contact.html")
