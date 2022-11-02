"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Professor extends Funcionario_1.default {
    constructor(nome, sobrenome, matricula, salario, titulacao) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }
    get titulacao() {
        return this._titulacao;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario;
    }
    calcularSalarioSegundaParcela() {
        return 0;
    }
}
exports.default = Professor;
