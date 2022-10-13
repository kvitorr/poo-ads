class Calculadora{
    private _operando1: number;
    private _operando2: number;

    constructor(_operando1: number, _operando2: number){
        this._operando1 = _operando1;
        this._operando2 = _operando2;
    }

    public soma(): number{
        return this._operando1 + this._operando2;
    }

    public multiplicacao(): number {
        return this._operando1 * this._operando2;
    }
}

let calc: Calculadora = new Calculadora(1, 2);

console.log(calc.multiplicacao()) //2
console.log(calc.soma()) //3


/*
    Aparece que o atributo é privado e só é acessível
    dentro da classe Calculadora. 
*/
