const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODO_LS = 'toDos';

let toDos = [];


const saveToDos = () => {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

const deleteToDo = (event) => {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanTodos = toDos.filter((todo) => {
        return todo.id !== parseInt(li.id);
    });
    toDos = cleanTodos;
    saveToDos();
}

const paintToDo = (text) => {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;

    delBtn.innerText = '❌';
    delBtn.addEventListener('click', deleteToDo);
    
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    li.id = newId;

    const toDosObj = {
        text: text,
        id: newId,
    }
    toDos.push(toDosObj);
    saveToDos();
}

const handleSub = (event) => {
    event.preventDefault();
    
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}

const something = (todo) => {
    paintToDo(todo.text);
}

const loadToDos = () => {
    const loadToDos = localStorage.getItem(TODO_LS);
    if(loadToDos !== null){
        const parsedTodo = JSON.parse(loadToDos)
        parsedTodo.forEach(something);
    }
}

const toDoInit = () => {
    loadToDos();
    toDoForm.addEventListener('submit', handleSub);
}

toDoInit();