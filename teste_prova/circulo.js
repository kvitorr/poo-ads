"use strict";
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return 3.14 * (this.raio ** 2);
    }
    calcularPerimetro() {
        return 2 * 3.14 * this.raio;
    }
}
let c1 = new Circulo(3);
console.log(c1.calcularArea());
console.log(c1.calcularPerimetro());
