<script>
    
    function addform() {
        let csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        let form = document.getElementById('add-todo-form');
        // let formData = new FormData(form);  // this sends all the form data 
        let title = document.getElementById('title')
        let title_value = title.value; 
        let formData = new FormData();
        formData.append('title', title_value);  // Manually append only the fields you want
        fetch('/add_todo/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': csrftoken
            }
        })
        .then(response => response.json())
        .then(data => {
            let todos_ul = document.getElementById('todos')
            let createdtodo = `
            <form id='todo-form-${data['todo']['id']}'>
                <li class="list-group-item  d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div class="d-flex align-items-center">
                        <span id='todo-title-${data['todo']['id']}'>${data['todo']['title']}</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <a id='mark-done-${data['todo']['id']}' onclick='markasdone(${data['todo']['id']})' href="#!" class="mx-3" data-mdb-toggle="tooltip" title="mark as done ">
                            <i class="fa-solid fa-check"></i>
                        </a>
                        <a class="mx-3" id='edit-todo-${data['todo']['id']}' onclick='edittodo(${data['todo']['id']},${data['todo']['title']})' href="#!" data-mdb-toggle="tooltip" title="edit text ">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a class="mx-3" id='delete-todo-${data['todo']['id']}' onclick='deletetodo(${data['todo']['id']})' href="#!" data-mdb-toggle="tooltip" title="remove ">
                            <i class="fas fa-times text-danger"></i>
                        </a>
                    </div>
                </li>
            </form>
            `

            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = createdtodo;
            todos_ul.appendChild(tempDiv);
            title.value = ``
        })
    }
    
</script>





