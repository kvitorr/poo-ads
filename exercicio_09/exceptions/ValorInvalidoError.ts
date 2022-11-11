import { AplicacaoError } from "./AplicacaoError";

class ValorInvalidoError extends AplicacaoError{
    constructor(msg: string){
        super(msg);
    }
}

export {ValorInvalidoError}