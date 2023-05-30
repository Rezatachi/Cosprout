from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .models import Applicant

def index(request):
    print(request.user)
    if not request.user.is_authenticated:
        return redirect('login')
    else:
        return render(request, 'cosprout/index.html')

def login_user(request):
    logout(request)
    if request.method == "POST" :
        username = request.POST['username']
        password = request.POST['password']
        print(username)
        print(password)
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            print("reached here")
            messages.error(request, "Can't login. Please try again")
            return redirect('login')
    else:
        return render(request, 'cosprout/login.html')

def signup(request):
    return render(request, 'cosprout/signup.html')

def createUser(request):
    if (request.method == 'POST'):
        username = request.POST['username']
        password1 = request.POST['password']
        password2 = request.POST['confirmedPassword']
        email = request.POST['email']
        firstName = request.POST['firstName']
        lastName = request.POST['lastName']
        if (password1 == password2):
            if Applicant.objects.filter(username = username).exists():
                messages.info(request, "Username already exists")
                return redirect('createUser')
            elif Applicant.objects.filter(email = email).exists():
                messages.info(request, "Email already exists")
                return redirect('createUser')
            else: 
                user = Applicant.objects.create_user(username=username, email=email, password=password1)
                user.first_name = firstName
                user.last_name = lastName
                user.save()
        else: 
            messages.info(request, "Password not matching")
            return redirect('createUser')
        return redirect('login')
    else: 
        return render(request, "cosprout/signup.html")