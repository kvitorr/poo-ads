"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaExistenteError = void 0;
class ContaExistenteError extends Error {
    constructor(msg) {
        super(msg);
    }
}
exports.ContaExistenteError = ContaExistenteError;
