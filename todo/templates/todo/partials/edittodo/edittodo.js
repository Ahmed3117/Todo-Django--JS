<script>
    
    function edittodo(todo_id, todo_title) {
        
        let csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        let todo_form = document.getElementById('addedit-todo-form');
        todo_form.innerHTML = ``
        todo_form.innerHTML = `
            <form id="edit-todo-form" dir='ltr' class="d-flex justify-content-center align-items-center mb-4">
                {% csrf_token %}
                <div class="form-outline flex-fill">
                <input type="text" id="title" name="title" class="form-control form-control-lg" />
                <label class="form-label" for="title">you need to Edit this todo ?</label>
                </div>
                <a id='submit-form' onclick="editform(${todo_id},'${todo_title}')" class="btn btn-primary btn-lg ms-2">Edit</a>
            </form>
        `
        let title = document.getElementById('title')
        title.value=todo_title
        title.focus()
    }
    

    function editform(todo_id,todo_title) {
        let csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        let form = document.getElementById('edit-todo-form');
        
        let title = document.getElementById('title')
        let title_value = title.value; 
        let formData = new FormData();
        formData.append('title', title_value); 
        fetch(`/edittodo/${todo_id}/`, {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': csrftoken
            }
        })
        .then(response => response.json())
        .then(data => {
            title_span_id = `todo-title-${data['todo']['id']}`
            
            title_span = document.getElementById(title_span_id)
            console.log(title_span.text)
            title_span.innerText = data['todo']['title']
            title.value = ``
        })
    }
    

</script>





