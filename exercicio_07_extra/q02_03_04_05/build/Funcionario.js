"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Funcionario extends Pessoa_1.default {
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        this._matricula = matricula;
        if (salario > 0) {
            this._salario = salario;
        }
        else
            this._salario = 0;
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    calcularSalarioPrimeiraParcela() {
        return this._salario * 0.60;
    }
    calcularSalarioSegundaParcela() {
        return this._salario * 0.40;
    }
}
exports.default = Funcionario;
