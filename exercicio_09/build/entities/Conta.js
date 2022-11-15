"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const ValorInvalidoError_1 = require("../exceptions/ValorInvalidoError");
class Conta {
    constructor(numero, saldo) {
        this._saldo = 0;
        if (saldo < 0) {
            throw new ValorInvalidoError_1.ValorInvalidoError("Valor inválido.");
        }
        this._saldo = saldo;
        this._numero = numero;
    }
    get saldo() {
        return this._saldo;
    }
    get numero() {
        return this._numero;
    }
    sacar(valor) {
        this.validaValor(valor);
        if (this._saldo < valor) {
            throw new Error('Saldo insuficiente.');
        }
        this._saldo = this._saldo - valor;
    }
    depositar(valor) {
        this.validaValor(valor);
        this._saldo += valor;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    validaValor(valor) {
        if (valor <= 0) {
            throw new ValorInvalidoError_1.ValorInvalidoError("Valor digitado é menor ou igual a zero.");
        }
    }
}
exports.Conta = Conta;
