"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaInexistenteError = void 0;
class ContaInexistenteError extends Error {
    constructor(msg) {
        super(msg);
    }
}
exports.ContaInexistenteError = ContaInexistenteError;
