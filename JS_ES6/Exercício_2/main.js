const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
   

// 2.1 Utilizando o map

var idades = usuarios.map(function(item){
    return item.idade;
});

console.log(idades);

// 2.2 Utilizando o filter

var specificUsuario = usuarios.filter(function(item){
    return (item.empresa === "Rocketseat" && item.idade > 18);
});

console.log(specificUsuario);

// 2.3 Utilizando o find

var tabalho = usuarios.find(function(item){
    return item.empresa === "Google";
}); 

console.log(tabalho);

// 2.4 Unindo operações

var idades = usuarios
    .map(item => ({ ...item, idade: item.idade * 2}))
    .filter(item => item.idade <= 50);
    
console.log(idades);