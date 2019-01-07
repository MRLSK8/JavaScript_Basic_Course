
var arr = [1, 3, 4, 5, 8, 9];

var newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(' Soma = ' + sum);

const filter = arr.filter(function(item){
    return item % 2 !== 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 5;
});

console.log(find);