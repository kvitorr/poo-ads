import { Calculadora } from "./Calculadora"
import { CalculadoraCientifica } from "./CalculadoraCientifica"

function main(){

    let calculadora1: Calculadora = new Calculadora(1, 2);
    console.log(calculadora1.soma());

    let calculadora2: CalculadoraCientifica = new CalculadoraCientifica(3, 2);

    console.log(calculadora2.soma())
    console.log(calculadora2.exponenciar())
} main()