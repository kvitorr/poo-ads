import { Produto } from "./Produto.js";
export class ProdutoPerecivel extends Produto {
    constructor(identificador, descricao, quantidadeDeProdutos, valorUnitario, dataDeValidade) {
        super(identificador, descricao, quantidadeDeProdutos, valorUnitario);
        this._dataDeValidade = dataDeValidade;
    }
    get dataDeValidade() {
        return this._dataDeValidade;
    }
    ehValido() {
        let date = new Date();
        return this._dataDeValidade >= date;
    }
    repor(quantidade) {
        if (this.ehValido()) {
            super.repor(quantidade);
        }
    }
    darBaixa(quantidade) {
        if (this.ehValido()) {
            if (this.quantidadeDeProdutos - quantidade >= 0) {
                super.darBaixa(quantidade);
            }
        }
    }
}
