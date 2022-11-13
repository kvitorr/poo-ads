"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
class Triangulo {
    constructor(base, altura, a, b) {
        this._base = base;
        this._altura = altura;
        this._a = a;
        this._b = b;
    }
    get base() {
        return this._base;
    }
    get altura() {
        return this._altura;
    }
    area() {
        return this.base * this.altura / 2;
    }
    perimetro() {
        return this._a + this._b + this._base;
    }
}
exports.Triangulo = Triangulo;
