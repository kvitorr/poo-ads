export class Conta{
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldo: number = 0){
        if(saldo < 0){
            throw new Error("Instanciação: Valor negativo")
        }
        
        this._numero = numero;
        this._saldo = saldo;
    }

    public sacar(valor: number): void{
        if(valor < 0){
            throw new Error('Sacar: Valor negativo.');
        }

        if(this._saldo < valor){
            throw new Error('Saldo insuficiente.');
        }
        this._saldo = this._saldo - valor;
    }

    public depositar(valor: number): void{
        if(valor < 0){
            throw new Error('Depositar: Valor negativo.');
        }

        this._saldo = this._saldo + valor;
    }

    public transferir(contaDestino: Conta, valor: number): void{
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get numero(): string {
        return this._numero;
    }
}