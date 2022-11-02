export default class Pessoa {
    private _nome: String;
    private _sobrenome: String;

    constructor(nome: String, sobrenome: String){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    public get nome(): String{
        return this._nome;
    }

    public get sobrenome(): String{
        return this._sobrenome;
    }

    public nomeCompleto():String{
        return this._nome + " " + this._sobrenome;
    }
}