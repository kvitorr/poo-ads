"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
const FiguraGeometrica_1 = require("./FiguraGeometrica");
class Triangulo extends FiguraGeometrica_1.FiguraGeometrica {
    constructor(base, altura, a, b) {
        super(base, altura);
        this._a = a;
        this._b = b;
    }
    area() {
        return (this._base * this._altura) / 2;
    }
    perimetro() {
        return this._a + this._b + this._base;
    }
}
exports.Triangulo = Triangulo;
