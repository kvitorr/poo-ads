class ContaExistenteError extends Error{
    constructor(msg: string){
        super(msg);
    }
}

export {ContaExistenteError}