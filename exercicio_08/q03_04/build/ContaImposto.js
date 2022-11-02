"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaImposto = void 0;
const Conta_js_1 = require("./Conta.js");
class ContaImposto extends Conta_js_1.Conta {
    constructor(numero, saldo = 0, taxaDesconto) {
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }
    debitar(valor) {
        let total = valor + valor * (this._taxaDesconto / 100);
        super.sacar(total);
    }
}
exports.ContaImposto = ContaImposto;
