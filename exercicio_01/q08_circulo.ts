//Criação da classe Circulo
class Circulo {
    raio: number = 0;

    calculaArea(): number {
        return this.raio * this.raio * 3.14;
    }

    calcularPerimetro(): number {
        return this.raio * 2 * 3.14;
    }
}

//Instanciação de um objeto da classe Cículo e atribuição de valor
let circulo1 = new Circulo;
circulo1.raio = 1;

//Exibição da área e perímetro do circulo instanciado
console.log('------------------------------------------>')
console.log(`\tÁrea do círculo: ${circulo1.calculaArea()}`);
console.log(`\tPerímetro do círculo: ${circulo1.calcularPerimetro()}`);