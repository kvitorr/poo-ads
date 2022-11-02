"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero, saldo = 0) {
        if (saldo < 0) {
            throw new Error("Instanciação: Valor negativo");
        }
        this._numero = numero;
        this._saldo = saldo;
    }
    sacar(valor) {
        if (valor < 0) {
            throw new Error('Sacar: Valor negativo.');
        }
        if (this._saldo < valor) {
            throw new Error('Saldo insuficiente.');
        }
        this._saldo = this._saldo - valor;
    }
    depositar(valor) {
        if (valor < 0) {
            throw new Error('Depositar: Valor negativo.');
        }
        this._saldo = this._saldo + valor;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    get saldo() {
        return this._saldo;
    }
    get numero() {
        return this._numero;
    }
}
exports.Conta = Conta;
