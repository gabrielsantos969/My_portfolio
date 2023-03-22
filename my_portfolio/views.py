from django.shortcuts import render

def index(request):
    ctx = {
        'title': 'Home'
    }
    return render(request, 'sections_portfolio.html', ctx)

def about(request):
    ctx = {
        'title': 'About Me'
    }
    return render(request, 'about_me.html', ctx)

def certifications(request):
    ctx = {
        'title': 'Certifications'
    }
    return render(request, 'certifications.html', ctx)

def handler404(request, exception):
    ctx = {
        'title': '404'
    }
    return render(request, 'exeptions/404.html', ctx)