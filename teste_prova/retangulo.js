"use strict";
class Retangulo {
    constructor(lado1, lado2) {
        this.lado1 = lado1;
        this.lado2 = lado2;
    }
    calcularPerimetro() {
        return 2 * (this.lado1 + this.lado2);
    }
    calcularArea() {
        return this.lado1 * this.lado2;
    }
}
let r1 = new Retangulo(10, 5);
console.log(r1.calcularPerimetro());
console.log(r1.calcularArea());
