export class Conta {
    constructor(_numero, _saldo = 0) {
        this._numero = _numero;
        this._saldo = _saldo;
    }
    sacar(valor) {
        if (this._saldo < valor) {
            return false;
        }
        else {
            this._saldo = this._saldo - valor;
            return true;
        }
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        else {
            return false;
        }
    }
    get saldo() {
        return this._saldo;
    }
    get numero() {
        return this._numero;
    }
}
