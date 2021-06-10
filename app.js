//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){
    event.preventDefault(); //prevent form from submitting

    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //CHECKMARK BUTTON
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);

    //TrashBUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);

    //CLEAR TODO INPUT VALUE
    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target;

    //DELETE TODO
    if(item.classList[0] ==='trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    //CHECKMARK
    if(item.classList[0] ==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}