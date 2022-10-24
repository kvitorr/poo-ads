import { Conta } from "./Conta.js";
export class Poupanca extends Conta {
    constructor(numero, saldo = 0, taxaJuros) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }
    get taxaJuros() {
        return this._taxaJuros;
    }
    renderJuros() {
        this.depositar(this.saldo * this._taxaJuros / 100);
    }
}
