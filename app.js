let content = document.querySelector('.text-field');
let input = document.querySelector('.addList');
let todolist = document.querySelector('.list');

input.addEventListener('click', plus);


function plus() {
    let input = document.createElement('li');
    input.innerHTML = content.value;
    todolist.appendChild(input);
    content.value = '';
}

function deleteList() {
    
}