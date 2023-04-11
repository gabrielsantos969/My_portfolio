from django.shortcuts import render

def index(request):
    ctx = {
        'title': 'Home'
    }
    return render(request, 'portfolio.html', ctx)


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