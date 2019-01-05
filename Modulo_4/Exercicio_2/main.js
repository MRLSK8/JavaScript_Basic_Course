
var btnElement = document.getElementById('butao');
var textElement = document.getElementById('user');
var listElement = document.querySelector('ul');

btnElement.onclick = function () {
    listElement.innerHTML = '';
    var url =  "https://api.github.com/users/"+ textElement.value + "/repos"
    if (!user) return;
    axios.get(url)
        .then(function(response){
            renderRepositorios(response.data);
        })
    textElement.value = '';
}

function renderRepositorios(repositorios){
    for (repo of repositorios){
        const liElement = document.createElement('li');
        const textElement = document.createTextNode(repo.name);

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}