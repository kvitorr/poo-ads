export abstract class FiguraGeometrica{
    protected _base: number;
    protected _altura: number;

    constructor(base: number, altura: number){
        this._base = base;
        this._altura = altura;
    }


    abstract area(): number;
    abstract perimetro(): number;
}