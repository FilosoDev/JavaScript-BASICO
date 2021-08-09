/* Aula 07 - Funções. */

// Função sem parâmetro/argumento
function exibirMensagem() {
    console.log("Olá, seja bem-vindo(a) ao curso básico de JavaScript!");
}
exibirMensagem();


// Função com parâmetro
function media(notaUm, notaDois) {
    return (notaUm + notaDois) / 2;
}
var n1 = 9;
var n2 = 5;
console.log(media(n1, n2));