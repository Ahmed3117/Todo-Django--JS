from django.contrib import admin

from todo.models import Todo

# Register your models here.

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title','is_done')
    def row_css_class(self, obj, index):
        if obj.is_done == True:
            return 'blue-row'
        elif obj.is_done == False:
            return 'red-row'
        return ''

admin.site.register(Todo, TodoAdmin)
