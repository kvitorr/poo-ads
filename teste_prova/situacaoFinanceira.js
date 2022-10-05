"use strict";
class SituacaoFinanceira {
    constructor(vc, vd) {
        this.valorCreditos = vc;
        this.valorDebitos = vd;
    }
    saldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
let vitorSituation = new SituacaoFinanceira(5, 10);
console.log(vitorSituation.saldo());
