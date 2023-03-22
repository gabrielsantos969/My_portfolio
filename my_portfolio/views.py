from django.shortcuts import render

def index(request):
    return render(request, 'sections_portfolio.html', {})

def about(request):
    return render(request, 'about_me.html', {})

def certifications(request):
    return render(request, 'certifications.html', {})

def handler404(request, exception):
    return render(request, 'exeptions/404.html')