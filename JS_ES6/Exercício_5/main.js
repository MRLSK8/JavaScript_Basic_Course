// 5.1 Rest

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (...params) => {
    return params.reduce((item, next) => item + next);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2 Spread

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
   
const usuario2 = {...usuario, nome: "Marcelo"};
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: "Bonito"}};

console.log(usuario2);
console.log(usuario3);