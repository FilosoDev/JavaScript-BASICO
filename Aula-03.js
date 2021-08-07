// Aula 03 - Condicionais, Operadores Relacionais e Operadores Lógicos.

//Operadores relacionais

//==
//console.log(5 == 5);

//===
//console.log("5" === 5);

//!=
//console.log(5 != 4);

// > maior 
//< menor
//console.log(10 < 3);

// >= maior ou igual
// <= menor ou igual
//console.log(10 <= 11);

//if 
//else 
//if else
var media = 4;
var faltas = 1;
if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5 && faltas < 2) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

//casado = false;
//formado = true;
//console.log(casado || formado);

//ternario
(media >= 7) ? 'Aprovado' : 'Reprovado';