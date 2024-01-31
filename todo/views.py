from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.forms.models import model_to_dict
from .models import Todo

def todos(request):
    todos = Todo.objects.all()
    return render(request, 'todo/todos.html', {'todos': todos})

@require_http_methods(['POST'])
def add_todo(request):
    todo = None
    title = request.POST.get('title','')
    print(title)
    if title:
        todo = Todo.objects.create(title=title)
        todo = model_to_dict(todo)
    return JsonResponse({'todo':todo}, safe=False)

@require_http_methods(['POST'])
def edittodo(request, pk):
    todo = Todo.objects.get(pk=pk)
    title = request.POST.get('title')
    print('vvvvvvvvvvvvvvvvvvvvvvvv')
    print(title)
    print('vvvvvvvvvvvvvvvvvvvvvvvv')
    if title:
        todo.title = title
    todo.save()
    todo = model_to_dict(todo)
    return JsonResponse({'todo':todo}, safe=False)

@require_http_methods(['DELETE'])
def deletetodo(request, pk):
    todo = Todo.objects.get(pk=pk)
    todo. delete()
    return HttpResponse()

def markasdone(request,pk):
    todo = Todo.objects.get(id = pk)
    if todo.is_done == True:
        todo.is_done = False
    else:
        todo.is_done = True
    todo.save()
    return JsonResponse({'status':todo.is_done}, safe=False)
    
