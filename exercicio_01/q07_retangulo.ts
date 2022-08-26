class Retangulo {
    base : number = 0;
    altura : number = 0;
    
    calcularPerimetro(): number{
          return (this.base + this.altura) * 2;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
}

let retangulo1 = new Retangulo;
retangulo1.base = 10;
retangulo1.altura = 10;

console.log(`Perímetro do retângulo: ${retangulo1.calcularPerimetro()}`);
console.log(`Área do retângulo: ${retangulo1.calcularArea()}`);