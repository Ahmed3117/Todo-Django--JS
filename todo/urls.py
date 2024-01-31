from django.urls import path

from todo.views import add_todo, deletetodo, markasdone, todos,edittodo
app_name='todo'
urlpatterns = [
    path('', todos,name='todos'),
    path('add_todo/', add_todo,name='add_todo'),
    path('markasdone/<int:pk>/', markasdone, name='markasdone'),
    path('edittodo/<int:pk>/', edittodo, name='edittodo'),
    path('deletetodo/<int:pk>/', deletetodo, name='deletetodo'),
]

