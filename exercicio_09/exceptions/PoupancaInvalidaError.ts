class PoupancaInvalidaError extends Error{
    constructor(message: string){
        super(message)
    }
}

export {PoupancaInvalidaError}