/* Aula 03 - Condicionais, Operadores Relacionais
   e Operadores Lógicos.
*/

// While
let contador = 0;
while (contador <= 10) {
    console.log(contador);
    contador += 1; //contador++
}

// do While
let contadorDois = 0;
do {
    console.log(contadorDois);
    contadorDois++;
} while (contadorDois <= 10);


// for
for (let contador = 0; contador <= 10; contador++) {
    console.log(contador);
}

// for no array
var frutas = ['Maçã', 'Melão', 'Banana', 'Abacate', 'Melancia'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// foreach
frutas.forEach(function (elemento, indice, array) {
    console.log(elemento);
});

