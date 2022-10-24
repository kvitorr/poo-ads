"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
const CarroEletrico_1 = require("./CarroEletrico");
const Veiculo_1 = require("./Veiculo");
function main() {
    let veiculo1 = new Veiculo_1.Veiculo("vit666", 2022);
    let carro1 = new Carro_1.Carro("vit667", 2023, "Gol bolinha");
    let carroEletrico1 = new CarroEletrico_1.CarroEletrico("vit668", 2024, "Gol bolinha", 100);
    console.log(veiculo1);
    console.log(carro1);
    console.log(carroEletrico1);
}
main();
