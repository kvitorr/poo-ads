import { ValorInvalidoError } from "../exceptions/ValorInvalidoError";


export class Conta{
    private _numero: string;
    private _saldo: number = 0;

    constructor(numero: string, saldo: number){
        if(saldo < 0){
            throw new ValorInvalidoError("Valor inválido.")
        }
        
        this._saldo = saldo;
        this._numero = numero;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get numero(): string {
        return this._numero;
    }

    public sacar(valor: number): void{
        this.validaValor(valor);

        if(this._saldo < valor){
            throw new Error('Saldo insuficiente.');
        }
        this._saldo = this._saldo - valor;
    }

    public depositar(valor: number): void{
        this.validaValor(valor);
        this._saldo += valor;
    }

    public transferir(contaDestino: Conta, valor: number): void{
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    private validaValor(valor: number): void{
        if(valor <= 0){
            throw new ValorInvalidoError("Valor digitado é menor ou igual a zero.");
        }
    }

}