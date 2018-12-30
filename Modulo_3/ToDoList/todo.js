var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var to_do = JSON.parse(localStorage.getItem('all_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    for(todo of to_do){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        var pos = to_do.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
        linkElement.setAttribute('href', '#');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    if(inputElement.value != ''){
        var todoText = inputElement.value;

        to_do.push(todoText); // Adiciona elemento ao vetor de strings
        inputElement.value = '';

        renderTodos();
        saveTostoge()
    }
}

btnElement.onclick = addTodo;

function deleteTodo(pos){
    to_do.splice(pos, 1); 
    renderTodos();
    saveTostoge();
}

function saveTostoge(){
    localStorage.setItem('all_todos', JSON.stringify(to_do));
}