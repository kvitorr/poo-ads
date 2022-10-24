import { Conta } from "./Conta.js";

export class ContaImposto extends Conta {
    private _taxaDesconto: number;

    constructor(numero: string, saldo: number = 0, taxaDesconto: number){
        super(numero, saldo)
        this._taxaDesconto = taxaDesconto;
    }

    public debitar(valor: number): boolean {
        let total = valor + valor * (this._taxaDesconto/100);

        return super.sacar(total);
    }
}