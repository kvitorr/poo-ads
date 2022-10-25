export class Produto {
    constructor(identificador, descricao, quantidadeDeProdutos, valorUnitario) {
        this._identificador = identificador;
        this._descricao = descricao;
        this._quantidadeDeProdutos = quantidadeDeProdutos;
        this._valorUnitario = valorUnitario;
    }
    get identificador() {
        return this._identificador;
    }
    get descricao() {
        return this._descricao;
    }
    get quantidadeDeProdutos() {
        return this._quantidadeDeProdutos;
    }
    get valorUnitario() {
        return this._valorUnitario;
    }
    repor(quantidade) {
        this._quantidadeDeProdutos += quantidade;
    }
    darBaixa(quantidade) {
        if (this._quantidadeDeProdutos - quantidade >= 0) {
            this._quantidadeDeProdutos -= quantidade;
        }
    }
}
