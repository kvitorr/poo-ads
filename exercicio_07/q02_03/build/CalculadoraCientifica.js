"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculadoraCientifica = void 0;
const Calculadora_1 = require("./Calculadora");
class CalculadoraCientifica extends Calculadora_1.Calculadora {
    constructor(operando1, operando2) {
        super(operando1, operando2);
    }
    exponenciar() {
        return super.operando1 ** super.operando2;
    }
}
exports.CalculadoraCientifica = CalculadoraCientifica;
