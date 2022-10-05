"use strict";
class Jogador {
    constructor(força = 0, nivel = 0, pontos = 0) {
        this.força = força;
        this.nivel = nivel;
        this.pontos = pontos;
    }
    calcularAtaque() {
        return this.força * this.nivel;
    }
    atacar(jogadorAtacado) {
        if (jogadorAtacado.estaVivo()) {
            jogadorAtacado.pontos = jogadorAtacado.pontos - this.calcularAtaque();
        }
    }
    estaVivo() {
        return this.pontos > 0;
    }
    toString() {
        return `Força: ${this.força}\nNível: ${this.nivel}\nPontos: ${this.pontos}\n`;
    }
}
let vitor = new Jogador(1, 2, 3);
let ricardo = new Jogador(3, 4, 5);
console.log("Jogador: Vitor ~~ Status");
console.log(vitor.toString());
console.log("Jogador: Ricardo ~~ Status");
console.log(ricardo.toString());
//console.clear()
console.log("Vitor atacou Ricardo");
vitor.atacar(ricardo);
console.log("Jogador: Ricardo ~~ Status");
console.log(ricardo.toString());
//console.clear()
console.log("Ricardo atacou Vitor");
ricardo.atacar(vitor);
console.log("Jogador: Vitor ~~ Status");
console.log(vitor.toString());
console.log("Jogador: Ricardo ~~ Status");
console.log(ricardo.toString());
if (vitor.pontos < 0) {
    console.log("Vitor morreu x.x");
}
