class Retangulo {
    lado1: number;
    lado2: number;

    constructor(lado1: number, lado2: number){
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    calcularPerimetro(): number{
        return 2* (this.lado1 + this.lado2)
    }

    calcularArea(): number {
        return this.lado1 * this.lado2;
    }
}

let r1 = new Retangulo(10, 5);
console.log(r1.calcularPerimetro())
console.log(r1.calcularArea())