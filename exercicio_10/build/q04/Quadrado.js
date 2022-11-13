"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadrado = void 0;
const FiguraGeometrica_1 = require("./FiguraGeometrica");
class Quadrado extends FiguraGeometrica_1.FiguraGeometrica {
    area() {
        return this._base * this._altura;
    }
    perimetro() {
        return 2 * (this._altura + this._base);
    }
}
exports.Quadrado = Quadrado;
