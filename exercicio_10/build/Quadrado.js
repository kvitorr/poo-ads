"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadrado = void 0;
class Quadrado {
    constructor(base, altura) {
        this._altura = altura;
        this._base = base;
    }
    get altura() {
        return this._altura;
    }
    get base() {
        return this._base;
    }
    area() {
        return this._altura * this._base;
    }
    perimetro() {
        return 2 * (this._base + this._altura);
    }
    comparar(quadrado) {
        if (this.area() < quadrado.area()) {
            return -1;
        }
        else if (this.area() == quadrado.area()) {
            return 0;
        }
        else {
            return 1;
        }
    }
}
exports.Quadrado = Quadrado;
