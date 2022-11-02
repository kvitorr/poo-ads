export default class Empregado {
    private _salario: number = 500;
    
    constructor(salario: number){
        this._salario = salario;
    }

    public calcularSalario(): number {
        return this._salario;
    }
}