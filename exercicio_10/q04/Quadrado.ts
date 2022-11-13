import { FiguraGeometrica } from "./FiguraGeometrica";

export class Quadrado extends FiguraGeometrica{
    public area(): number{
        return this._base * this._altura;

    }

    public perimetro(): number{
        return 2*(this._altura+this._base);
    }
}