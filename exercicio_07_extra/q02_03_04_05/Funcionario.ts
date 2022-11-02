import Pessoa from "./Pessoa";

export default class Funcionario extends Pessoa{
    private _matricula: string;
    private _salario: number;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number){
        super(nome, sobrenome);
        this._matricula = matricula;

        if(salario > 0){
            this._salario = salario;

        } else this._salario = 0;
    }

    public get matricula(): string{
        return this._matricula;
    }

    public get salario(): number{
        return this._salario;
    }

    public calcularSalarioPrimeiraParcela(): number{
        return this._salario * 0.60;
    }

    public calcularSalarioSegundaParcela(): number{
        return this._salario * 0.40;
    }
}