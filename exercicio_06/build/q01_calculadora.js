"use strict";
class Calculadora {
    constructor(_operando1, _operando2) {
        this._operando1 = _operando1;
        this._operando2 = _operando2;
    }
    soma() {
        return this._operando1 + this._operando2;
    }
    multiplicacao() {
        return this._operando1 * this._operando2;
    }
}
let calc = new Calculadora(1, 2);
console.log(calc.multiplicacao()); //2
console.log(calc.soma()); //3
/*
    Aparece que o atributo é privado e só é acessível
    dentro da classe Calculadora.
*/
