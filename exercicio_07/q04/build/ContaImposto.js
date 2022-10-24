import { Conta } from "./Conta.js";
export class ContaImposto extends Conta {
    constructor(numero, saldo = 0, taxaDesconto) {
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }
    debitar(valor) {
        let total = valor + valor * (this._taxaDesconto / 100);
        return super.sacar(total);
    }
}
