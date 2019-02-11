const text = document.getElementById('texto');
const btnUpper = document.getElementById('btnUpper');
const btnLower = document.getElementById('btnLower');

btnUpper.onclick = () => {
    if(text.value != ""){
        document.getElementById('resultado').innerHTML = text.value.toUpperCase();
        text.value = "";
    }
}

btnLower.onclick = () => {
    if(text.value != ""){
        document.getElementById('resultado').innerHTML = text.value.toLowerCase();
        text.value = "";
    }
}