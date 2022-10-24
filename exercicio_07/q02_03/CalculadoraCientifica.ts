import { Calculadora } from "./Calculadora";

export class CalculadoraCientifica extends Calculadora{   
    constructor(operando1: number, operando2: number){
        super(operando1, operando2);
    }

    exponenciar(){
        return super.operando1 ** super.operando2;
    }
}