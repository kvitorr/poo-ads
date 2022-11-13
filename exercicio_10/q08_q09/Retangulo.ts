import { Quadrado } from "./Quadrado";

export class Retangulo extends Quadrado{
    public comparar(retangulo: Retangulo){
        if(this.area() < retangulo.area()){
            return -1;
        } else if (this.area() == retangulo.area()){
            return 0;
        } else {
            return 1;
        }
    }
}