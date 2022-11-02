import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    private _taxaJuros: number;

    constructor(numero: string, saldo: number = 0, taxaJuros: number){
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }

    public get taxaJuros(): number{
        return this._taxaJuros;
    }

    public renderJuros(): void{
        this.depositar(this.saldo * this._taxaJuros/100);
    }
}