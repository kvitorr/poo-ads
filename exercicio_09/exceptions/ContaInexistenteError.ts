class ContaInexistenteError extends Error{
    constructor(msg: string){
        super(msg);
    }
}

export {ContaInexistenteError}