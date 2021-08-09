// Aula 01 - Declarações e atribuições em variáveis, console.log, concatenação e comentários.

// Comentário de uma linha

/*

Aula 01 - Declarações e atribuições em variáveis,
console.log, concatenação e comentários.

*/

console.log('Olá mundo!');

const idade = 20;

var idadeDois = 30;

let idadeTres = 20;

console.log('23');

var numeroUm = 20;
var numeroDois = 10;
var total = numeroUm + numeroDois;
console.log(total);

var nome = 'Arthur';
var sobrenome = 'Ferreira';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nome + ' ' + sobrenome);
console.log(40 + 30);

nomeDois = 'Arthur';
console.log(nomeDois);

console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');


// Intepolação de variáveis.
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);