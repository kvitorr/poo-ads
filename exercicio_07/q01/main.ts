import { Carro } from "./Carro";
import { CarroEletrico } from "./CarroEletrico";
import { Veiculo } from "./Veiculo";

function main(){

    let veiculo1: Veiculo = new Veiculo("vit666", 2022);
    let carro1: Carro = new Carro("vit667", 2023, "Gol bolinha");
    let carroEletrico1: CarroEletrico = new CarroEletrico("vit668", 2024, "Gol bolinha", 100);

    console.log(veiculo1);
    console.log(carro1);
    console.log(carroEletrico1);
    

} main()