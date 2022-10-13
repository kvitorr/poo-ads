export class Conta{
    private _numero: string;
    private _saldo: number;

    constructor(_numero: string, _saldo: number = 0){
        this._numero = _numero;
        this._saldo = _saldo;
    }

    public sacar(valor: number): boolean{
        if(this._saldo < valor){
            return false;
        } else {
            this._saldo = this._saldo - valor;
            return true;
        }
    }

    public depositar(valor: number): void{
        this._saldo = this._saldo + valor;
    }


    transferir(contaDestino: Conta, valor: number): boolean{
        if(this.sacar(valor)){
            contaDestino.depositar(valor);
            return true;
        } else {
            return false;
        }
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get numero(): string {
        return this._numero;
    }
}