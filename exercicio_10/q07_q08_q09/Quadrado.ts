import { Comparavel } from "./Comparavel";
import { FiguraGeometrica } from "./FiguraGeometrica";


export class Quadrado implements FiguraGeometrica, Comparavel {
    private _altura: number;
    private _base: number;

    constructor(base: number, altura: number){
        this._altura = altura;
        this._base = base;
    }

    get altura(): number{
        return this._altura;
    }

    get base(): number{
        return this._base;
    }

    public calcularArea(): number {
        return this._altura * this._base;
    }

    public calcularPerimetro(): number {
        return 2*(this._base + this._altura);
    }

    public comparar(quadrado: Quadrado){
        if(this.calcularArea() < quadrado.calcularArea()){
            return -1;
        } else if (this.calcularArea() == quadrado.calcularArea()){
            return 0;
        } else {
            return 1;
        }
    }
}