"use strict";
function somar(...numeros) {
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    return soma;
}
console.log(somar(0));
console.log(somar(0, 2, 65));
console.log(somar(0, 2, 56, 76, 8));
console.log();
function saudarAll(...nomes) {
    for (let nome of nomes) {
        console.log(`Bom dia, ${nome}`);
    }
}
saudarAll("Vitor");
saudarAll('Ely', "Elanne");
saudarAll("Vitor", "Ricardo", "Eugenia", "Silvano");
