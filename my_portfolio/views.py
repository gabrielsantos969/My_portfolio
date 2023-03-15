from django.shortcuts import render

def index(request):
    return render(request, 'sections_portfolio.html', {})

def about(request):
    return render(request, 'about_me.html', {})