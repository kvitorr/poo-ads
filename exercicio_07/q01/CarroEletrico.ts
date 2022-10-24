import { Carro } from "./Carro";

export class CarroEletrico extends Carro{
    private _autonomiaBateria: number;

    constructor(placa: string, ano: number, 
        modelo: string, autonomiaBateria: number){
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }
}