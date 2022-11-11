class AplicacaoError extends Error{
    constructor(msg: string){
        super(msg);
    }
}

export {AplicacaoError}