"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesteFigura = void 0;
const Quadrado_1 = require("./Quadrado");
const Retangulo_1 = require("./Retangulo");
const Triangulo_1 = require("./Triangulo");
class TesteFigura {
    constructor(base, altura, a, b) {
        this.triangulo = new Triangulo_1.Triangulo(base, altura, a, b);
        this.quadrado = new Quadrado_1.Quadrado(base, altura);
        this.retangulo = new Retangulo_1.Retangulo(base, altura);
    }
    getTriangulo() {
        return this.triangulo;
    }
    getRetangulo() {
        return this.retangulo;
    }
    getQuadrado() {
        return this.quadrado;
    }
    getPerimetroTriangulo() {
        return this.triangulo.perimetro();
    }
    getPerimetroRetangulo() {
        return this.retangulo.perimetro();
    }
    getPerimetroQuadrado() {
        return this.quadrado.perimetro();
    }
    comparaTriangulo(triangulo) {
        if (this.triangulo.area() < triangulo.area()) {
            return -1;
        }
        else if (this.triangulo.area() == triangulo.area()) {
            return 0;
        }
        else {
            return 1;
        }
    }
    comparaQuadrado(quadrado) {
        if (this.quadrado.area() < quadrado.area()) {
            return -1;
        }
        else if (this.quadrado.area() == quadrado.area()) {
            return 0;
        }
        else {
            return 1;
        }
    }
    comparaRetangulo(retangulo) {
        if (this.retangulo.area() < retangulo.area()) {
            return -1;
        }
        else if (this.retangulo.area() == retangulo.area()) {
            return 0;
        }
        else {
            return 1;
        }
    }
}
exports.TesteFigura = TesteFigura;
