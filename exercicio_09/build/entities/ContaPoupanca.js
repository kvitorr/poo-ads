"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const Conta_js_1 = require("./Conta.js");
class ContaPoupanca extends Conta_js_1.Conta {
    constructor(numero, saldo = 0, taxaJuros) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }
    get taxaJuros() {
        return this._taxaJuros;
    }
    renderJuros() {
        this.depositar(this.saldo * this._taxaJuros / 100);
    }
}
exports.ContaPoupanca = ContaPoupanca;
