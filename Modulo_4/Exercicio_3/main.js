
var btnElement = document.getElementById('butao');
var textElement = document.getElementById('user');
var listElement = document.querySelector('ul');


function renderCarregando(){
    listElement.innerHTML = '';

    const Carregando = document.createElement('li');
    const textCarregndo = document.createTextNode('Carregando...');

    Carregando.appendChild(textCarregndo);
    listElement.appendChild(Carregando);
}

btnElement.onclick = function () {
    var user = textElement.value;
    var url = "https://api.github.com/users/"+ user + "/repos";

    renderCarregando();

    axios.get(url)
        .then(function(response){
            renderRepositorios(response.data);
        })
        .catch(function(){
            Trow_error();
        });

    textElement.value = '';
}

function Trow_error(){
    listElement.innerHTML = "";

    var errorElement = document.createElement('li');
    var textElement = document.createTextNode('Erro 404');

    errorElement.style.color = "#F00";

    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}


function renderRepositorios(repositorios){
    listElement.innerHTML = '';

    for (repo of repositorios){
        const liElement = document.createElement('li');
        const textElement = document.createTextNode(repo.name);

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}