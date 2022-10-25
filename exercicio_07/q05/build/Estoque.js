import { Produto } from "./Produto.js";
import { ProdutoPerecivel } from "./ProdutoPerecivel.js";
export class Estoque {
    constructor() {
        this._produtos = [];
    }
    inserir(p) {
        if (this.consultarIndice(p.identificador) == -1 && this.consultarNome(p.descricao) == -1) {
            this._produtos.push(p);
        }
    }
    consultarIndice(id) {
        let idResult = -1;
        let produto;
        for (let i = 0; i < this._produtos.length; i++) {
            produto = this._produtos[i];
            if (produto.identificador == id) {
                return i;
            }
        }
        return idResult;
    }
    consultarNome(nome) {
        let idResult = -1;
        let produto;
        for (let i = 0; i < this._produtos.length; i++) {
            produto = this._produtos[i];
            if (produto.descricao == nome) {
                idResult = i;
                return idResult;
            }
        }
        return idResult;
    }
    encontrarProduto(id) {
        let produto;
        const indice = this.consultarIndice(id);
        if (indice != -1) {
            return this._produtos[indice];
        }
        else {
            return produto;
        }
    }
    excluir(id) {
        let indice = this.consultarIndice(id);
        if (indice != -1) {
            for (let i = indice; i < this._produtos.length; i++) {
                this._produtos[i] = this._produtos[i + 1];
            }
            this._produtos.pop();
        }
    }
    repor(id, quantidade) {
        let indice = this.consultarIndice(id);
        let produto = this._produtos[indice];
        if (indice != -1) {
            if (produto instanceof ProdutoPerecivel) {
                produto.repor(quantidade);
            }
            if (produto instanceof Produto) {
                produto.repor(quantidade);
            }
        }
    }
    darBaixa(id, quantidade) {
        let indice = this.consultarIndice(id);
        let produto = this._produtos[indice];
        if (indice != -1) {
            if (produto instanceof ProdutoPerecivel) {
                produto.darBaixa(quantidade);
            }
            if (produto instanceof Produto) {
                produto.darBaixa(quantidade);
            }
        }
    }
    listarVencidos() {
        console.log("\nProdutos Vencidos:\n");
        let produto;
        for (let i = 0; i < this._produtos.length; i++) {
            produto = this._produtos[i];
            if (produto instanceof ProdutoPerecivel) {
                if (!produto.ehValido()) {
                    console.log(`ID: ${produto.identificador}`);
                    console.log(`Nome: ${produto.descricao}`);
                    console.log(`Quantidade de Produtos: ${produto.quantidadeDeProdutos}\n`);
                }
            }
        }
    }
}
