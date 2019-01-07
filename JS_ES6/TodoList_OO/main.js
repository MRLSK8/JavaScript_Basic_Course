var listElement = document.querySelector('ol');

class List{
    constructor(){
        this.data = [];
    }

    addElements(data){
        this.data.push(data);
    }

    loadElements(){
        listElement.innerHTML = '';

        for(name of this.data){
            var nameElement = document.createElement('li');
            var textElement = document.createTextNode(name);

            nameElement.appendChild(textElement);
            listElement.appendChild(nameElement);
        }
    }
}

class Todolist extends List{
    constructor() {
        super();

        this.loading = 'Loading...';

        var nameElement = document.createElement('li');
        var textElement = document.createTextNode(this.loading);

        nameElement.appendChild(textElement);
        listElement.appendChild(nameElement);
    }
}

const MinhaLista = new Todolist();

document.getElementById('novotodo').onclick = function () {
    
    MinhaLista.addElements(document.getElementById('nome').value);
    MinhaLista.loadElements();

    document.getElementById('nome').value = '';
}



