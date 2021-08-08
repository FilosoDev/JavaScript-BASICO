//Arrays
var nomes = [
    'Arthur',
    'Fernando', 
    'Elaine',
    'Deise',
    'André',
    'Viviane',
    'Marcela',
];

//for(let i = 0; i < nomes.length; i++){
//    console.log(nomes[i]);
//}

//console.log(nomes[1]);
//console.log(nomes);
//console.log(nomes.length);

var frutas = new Array(
    'Banana', 'Maçã', 'Manga', 'Abacate', 'Melancia', 'Morango', 'Abacaxi',
);
//console.log(frutas);


// alterando valor de uma posição
//frutas[2] = 'Abacaxi';
//console.log(frutas);

// push -- adiciona um item no final do array
//frutas.push('Melancia');
//console.log(frutas);

// unshift -- adiciona um item no inicio do array
//frutas.unshift('Morango');
//console.log(frutas);

// pop - remove o último item
//frutas.pop();
//console.log(frutas);

// shift - remove o primeiro elemento
//frutas.shift();
//console.log(frutas); 

// splice - deleta elementos a partir da posição do argumento
// o segundo argumento vai ser a quantidade
//frutas.splice(3, 3);
//console.log(frutas);

// colocar separadores entre os elementos
//console.log(frutas.join(' | '));

//var numeros = [1, 2, 3, 4, 5];
//console.log(numeros.reverse());

//var numeros = [7, 9, 2, 5, 1];
//console.log(numeros.sort());

//indexof -- busca o elemento e devolve posição
// se não existir, retorna -1
//console.log(frutas.indexOf('Kiwi'));

// lastindexof - procura se existe o elemento e 
// devolve a posição do último acahado, se não existir
// devolve o -1
var dias = [10, 23, 15, 10, 5, 2, 10];
//console.log(dias.lastIndexOf(10));

// concat - junta 2 arrays em um só
// devolve cópia concatenada
//console.log(frutas.concat(dias));

// slice 
//console.log(frutas.slice(1, 3));

// toString - transforma em string
//console.log(dias);
//console.log(dias.toString());

// map - mapeia o array e faz alguma coisa que determinarmos
//console.log(frutas);
var frutasMaiusculo = frutas.map(function (item) {
   return item.toUpperCase();
});
//console.log(frutasMaiusculo);


// filter percorre o array e traz algo específico
var valores = [44, 99, 73, 23, 15, 07, 09, 23, 73, 44, 45, 23];
//console.log(valores);
//var valoresRepetidos = valores.filter(function (item) {
//   return item < 23; 
//});
//console.log(valoresRepetidos);

// every - true se TODOS corresponderem ao teste dentro da função
var menores = valores.every(function (item) {
   return item < 100; 
});
//console.log(menores);

// some - retorna true se pelo menos um corresponder ao teste
var maiores = valores.some(function (item) {
   return item >= 99;
});
//console.log(maiores);

// reduce - somas os valores do array de frente pra trás
var resultado = valores.reduce(function (valorAnterior, valorCorrente, indexCorrente, items) {
   return valorAnterior + valorCorrente; 
});
console.log(resultado);
