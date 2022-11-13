"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(nome, saldo) {
        this._nome = nome;
        this._saldo = saldo;
    }
    get nome() {
        return this._nome;
    }
    get saldo() {
        return this._saldo;
    }
}
exports.Conta = Conta;
