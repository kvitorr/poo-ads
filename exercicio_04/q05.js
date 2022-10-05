"use strict";
class Saudacao {
    constructor(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    obterSaudacao() {
        return `${this.texto}, ${this.destinatario}.`;
    }
}
let saudacao1 = new Saudacao("Bom dia", "Vitor");
console.log(saudacao1.obterSaudacao());
