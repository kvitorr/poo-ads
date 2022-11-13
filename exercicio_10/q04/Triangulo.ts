import { FiguraGeometrica } from "./FiguraGeometrica";

export class Triangulo extends FiguraGeometrica{
    
    private _a: number;
    private _b: number;

    constructor(base: number, altura: number, a: number, b: number){
        super(base, altura);
        this._a = a;
        this._b = b;
    }

    public area(): number{
        return (this._base * this._altura)/2;

    }

    public perimetro(): number{
        return this._a + this._b + this._base;
    }
}