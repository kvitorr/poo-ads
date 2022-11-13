import { Quadrado } from "./Quadrado";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";

export class TesteFigura {
    private triangulo: Triangulo;
    private quadrado: Quadrado;
    private retangulo: Retangulo;

    constructor(base: number, altura: number, a: number, b: number){
        this.triangulo = new Triangulo(base, altura, a, b);
        this.quadrado = new Quadrado(base, altura);
        this.retangulo = new Retangulo(base, altura);
    }

    public getTriangulo(): Triangulo{
        return this.triangulo;
    }

    public getRetangulo(): Retangulo{
        return this.retangulo;
    }

    public getQuadrado(): Quadrado{
        return this.quadrado;
    }

    public getPerimetroTriangulo(): number{
        return this.triangulo.perimetro();
    }

    public getPerimetroRetangulo(): number{
        return this.retangulo.perimetro();
    }

    public getPerimetroQuadrado(): number{
        return this.quadrado.perimetro();
    }

    public comparaTriangulo(triangulo: Triangulo){
        if(this.triangulo.area() < triangulo.area()){
            return -1;
        } else if (this.triangulo.area() == triangulo.area()){
            return 0;
        } else {
            return 1;
        }
    }

    public comparaQuadrado(quadrado: Quadrado){
        if(this.quadrado.area() < quadrado.area()){
            return -1;
        } else if (this.quadrado.area() == quadrado.area()){
            return 0;
        } else {
            return 1;
        }
    }

    public comparaRetangulo(retangulo: Retangulo){
        if(this.retangulo.area() < retangulo.area()){
            return -1;
        } else if (this.retangulo.area() == retangulo.area()){
            return 0;
        } else {
            return 1;
        }
    }
}