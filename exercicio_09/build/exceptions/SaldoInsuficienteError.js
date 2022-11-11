"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaldoInsuficienteError = void 0;
class SaldoInsuficienteError extends Error {
    constructor(msg) {
        super(msg);
    }
}
exports.SaldoInsuficienteError = SaldoInsuficienteError;
