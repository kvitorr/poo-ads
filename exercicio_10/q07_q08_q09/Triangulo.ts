import { Comparavel } from "./Comparavel";
import { FiguraGeometrica } from "./FiguraGeometrica";

export class Triangulo implements FiguraGeometrica, Comparavel {
    private _base: number;
    private _altura: number;
    private _a: number;
    private _b: number;

    constructor(base: number, altura: number, a: number, b: number){
        this._base = base;
        this._altura = altura;
        this._a = a;
        this._b = b;
    }

    get base(): number{
        return this._base;
    }

    get altura(): number{
        return this._altura;
    }

    public calcularArea(): number {
        return this.base * this.altura/2;
    }

    public calcularPerimetro(): number {
        return this._a+this._b+this._base;
    }

    public comparar(triangulo: Triangulo){
        if(this.calcularArea() < triangulo.calcularArea()){
            return -1;
        } else if (this.calcularArea() == triangulo.calcularArea()){
            return 0;
        } else {
            return 1;
        }
    }
}