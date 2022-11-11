class SaldoInsuficienteError extends Error{
    constructor(msg: string){
        super(msg);
    }
}

export {SaldoInsuficienteError}