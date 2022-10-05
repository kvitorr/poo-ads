class SituacaoFinanceira{
    valorCreditos: number;
    valorDebitos: number;

    constructor(vc: number, vd: number){
        this.valorCreditos = vc;
        this.valorDebitos = vd;
    }

    saldo(): number{
        return this.valorCreditos - this.valorDebitos;
    }
}

let vitorSituation = new SituacaoFinanceira(5, 10)
console.log(vitorSituation.saldo());