<script>
    // mark a todo as done
    function markasdone(todo_id) {
        fetch(`/markasdone/${todo_id}` , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
                current_todo = document.getElementById(`mark-done-${todo_id}`);
                let todo_title = document.getElementById(`todo-title-${todo_id}`);
                if (data['status'] == true){
                    current_todo.innerHTML = `<i class="fa-solid fa-rotate-right"></i>`;
                    todo_title.classList.add('done');
                }
                else{
                    current_todo.innerHTML = `<i class="fa-solid fa-check"></i>`;
                    todo_title.classList.remove('done');
                }
        })
    }

    // delete a todo 
    function deletetodo(todo_id) {
        let csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        fetch(`/deletetodo/${todo_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
        })
        .then(response => {
            if (response.status == 200){
                let current_todo_form = document.getElementById(`todo-form-${todo_id}`);
                current_todo_form.style.display = 'none';
            }
        })
    }
</script>