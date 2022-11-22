import { Defensivel } from "../interfaces/Defensivel";

export class BaseMilitar implements Defensivel {
    private _id: number;
    private _x: number;
    private _y: number;
    private _percentualDano: number;

    constructor(id: number, x: number, y: number){
        this._id = id;
        this._x = x;
        this._y = y;
        this._percentualDano = 0;
    }

    public estaEliminado(): boolean {
        if(this._percentualDano >= 90) return true;
        else return false;
    }

    public defenderAtaque(valorAtaque: number): void {
        this._percentualDano += valorAtaque;
    }

    public get percentualDano(){
        return this._percentualDano;
    }
}