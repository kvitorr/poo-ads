import { Defensivel } from "../interfaces/Defensivel";
import {JaEliminadoException} from "../error/JaEliminadoException"

export class Guerreiro implements Defensivel {
    private _id: number;
    private _descricao: string;
    private _forcaAtaque: number;
    private _life: number;

    constructor(id: number, descricao: string, forcaAtaque: number){
        this._id = id;
        this._descricao = descricao;
        this._forcaAtaque = forcaAtaque;
        this._life = 10;
    }

    public estaEliminado(): boolean {
        if(this._life <= 0) return true;
        else return false;
    }
    
    public defenderAtaque(valorAtaque: number): void {
        this._life -= valorAtaque;
    }

    public atacar(defensivel: Defensivel): void{
        if(defensivel.estaEliminado()){
            throw new JaEliminadoException("Defensível já eliminado");
        }
        defensivel.defenderAtaque(this._forcaAtaque);
    }
}