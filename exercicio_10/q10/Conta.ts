export class Conta {
    private _nome: string;
    private _saldo: number;

    constructor(nome: string, saldo: number){
        this._nome = nome;
        this._saldo = saldo;
    }


    public get nome(): string{
        return this._nome;
    }

    public get saldo(): number{
        return this._saldo;
    }
}