import Diarista from "./Diarista";

export default class Horista extends Diarista {
    //@Override
    public calcularSalario(): number {
        return super.calcularSalario()/24;
    }
}