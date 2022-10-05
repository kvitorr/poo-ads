"use strict";
function nomeCompleto(nome, sobrenome) {
    if (sobrenome) {
        return nome + " " + sobrenome;
    }
    return nome;
}
console.log(nomeCompleto("Vitor"));
console.log(nomeCompleto("Vitor", "Araujo"));
