const form = document.querySelector('.todo-form')
const input = document.querySelector('.todo-form__input')
const items = document.querySelector('.todo-list__items')

let counter = 0;
let countStr = document.createElement("div");
countStr.innerText = `You have ${counter} uncompleted tasks`;
items.appendChild(countStr);

function updCount() {
    if (counter === 1) {
        countStr.innerText = `You have ${counter} uncompleted task`;
    } else {
        countStr.innerText = `You have ${counter} uncompleted tasks`;
    } 
};

function createEl() {
        counter++;
        updCount();
        const todoEl = document.createElement("div");
        todoEl.classList.add('todo-list-item');
        
        const todoText = document.createElement("input");
        todoText.classList.add('todo-list-item__text');
        todoText.value = input.value;
        todoText.setAttribute("readonly", "readonly")
    
        const todoEdit = document.createElement("button");
        todoEdit.classList.add('todo-list-item__edit');
        todoEdit.innerHTML = '<i class="far fa-edit"></i>';
    
        const todoDelete = document.createElement("button");
        todoDelete.classList.add('todo-list-item__delete');
        todoDelete.innerHTML = '<i class="far fa-trash-alt"></i>';
    
        todoEl.appendChild(todoText);
        todoEl.appendChild(todoEdit);
        todoEl.appendChild(todoDelete);
    
        items.appendChild(todoEl);
    
        todoEdit.addEventListener('click', () => {
            if (todoEdit.innerHTML === '<i class="far fa-edit"></i>') {
                todoText.removeAttribute("readonly");
                todoText.focus();
                todoEdit.innerHTML = '<i class="far fa-save"></i>'
            }
            else {
                todoText.setAttribute("readonly", "readonly")
                todoEdit.innerHTML = '<i class="far fa-edit"></i>';
            };
        });
    
        todoDelete.addEventListener('click', () => {
            counter--;
            updCount();
            items.removeChild(todoEl);
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (input.value !== '') {
        createEl();
        input.value = '';
    }
    else{
        alert('Enter task in a form below');
        return
    }   
});



