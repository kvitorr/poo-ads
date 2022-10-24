"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculadora_1 = require("./Calculadora");
const CalculadoraCientifica_1 = require("./CalculadoraCientifica");
function main() {
    let calculadora1 = new Calculadora_1.Calculadora(1, 2);
    console.log(calculadora1.soma());
    let calculadora2 = new CalculadoraCientifica_1.CalculadoraCientifica(3, 2);
    console.log(calculadora2.soma());
    console.log(calculadora2.exponenciar());
}
main();
