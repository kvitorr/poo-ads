"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empregado {
    constructor(salario) {
        this._salario = 500;
        this._salario = salario;
    }
    calcularSalario() {
        return this._salario;
    }
}
exports.default = Empregado;
