class Circulo {
    raio: number;

    constructor(raio: number){
        this.raio = raio;
    }

    calcularArea(): number{
        return 3.14 * (this.raio**2)
    }

    calcularPerimetro(): number {
        return 2 * 3.14 * this.raio;
    }
}

let c1 = new Circulo(3);

console.log(c1.calcularArea())

console.log(c1.calcularPerimetro())