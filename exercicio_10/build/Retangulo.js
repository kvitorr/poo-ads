"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = void 0;
const Quadrado_1 = require("./Quadrado");
class Retangulo extends Quadrado_1.Quadrado {
    comparar(retangulo) {
        if (this.area() < retangulo.area()) {
            return -1;
        }
        else if (this.area() == retangulo.area()) {
            return 0;
        }
        else {
            return 1;
        }
    }
}
exports.Retangulo = Retangulo;
