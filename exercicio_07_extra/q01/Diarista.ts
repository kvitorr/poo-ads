import Empregado from "./Empregado";

export default class Diarista extends Empregado {
    
    //@Override
    public calcularSalario(): number{
        return super.calcularSalario()/30;
    }
}