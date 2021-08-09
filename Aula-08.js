/* Aula 08 - Objetos
   Declarações e Atribuições. 
*/

var pessoa = {
    nome: 'Arthur',
    sobrenome: 'Ferreira',
    idade: 40,

    // método
    nomeCompleto: function () {
      return this.nome + ' ' + this.sobrenome;
    },


};
console.log(pessoa.nomeCompleto());

console.log(pessoa);
console.log(pessoa.idade);
console.log(pessoa.nome);
pessoa.nome = 'Arthur Antunes';
console.log(pessoa.nome);

pessoaDois = new Object();
pessoaDois.nome = 'José';
pessoaDois.sobrenome = 'Ferreira';
console.log(pessoaDois.nome);
console.log(pessoaDois.sobrenome);
console.log(pessoaDois);