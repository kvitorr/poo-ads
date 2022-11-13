export class Quadrado implements FiguraGeometrica {
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

    public area(): number {
        return this._altura * this._base;
    }

    public perimetro(): number {
        return 2*(this._base + this._altura);
    }
}