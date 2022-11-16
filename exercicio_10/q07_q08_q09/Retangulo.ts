import { Quadrado } from "./Quadrado";

export class Retangulo extends Quadrado{
    public comparar(retangulo: Retangulo){
        if(this.calcularArea() < retangulo.calcularArea()){
            return -1;
        } else if (this.calcularArea() == retangulo.calcularArea()){
            return 0;
        } else {
            return 1;
        }
    }
}