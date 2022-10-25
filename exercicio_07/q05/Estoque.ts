import { Produto } from "./Produto.js";
import { ProdutoPerecivel } from "./ProdutoPerecivel.js"

export class Estoque {
    private _produtos: Produto[] = [];

    public inserir(p: Produto):void {
        if(this.consultarIndice(p.identificador) == -1 && this.consultarNome(p.descricao) == -1){
            this._produtos.push(p);
        }
    }

    public consultarIndice(id: number): number {
        let idResult: number = -1;
        let produto: Produto;

        for (let i = 0; i < this._produtos.length; i++) {
            produto = this._produtos[i];
            if(produto.identificador == id){
                return i;
            }
        }
        return idResult;
    }

    public consultarNome(nome: string): number {
        let idResult: number = -1;
        let produto: Produto;
        
        for (let i = 0; i < this._produtos.length; i++) {
            produto = this._produtos[i]
            if(produto.descricao == nome){
                idResult = i;
                return idResult;
            }
        }
        return idResult;
    }

    public encontrarProduto(id: number): Produto{
        let produto !: Produto;
        const indice: number = this.consultarIndice(id)

        if(indice != -1){
            return this._produtos[indice]
        } else {
            return produto;
        }
    }

    public excluir(id: number): void{
        let indice: number = this.consultarIndice(id);

        if(indice != -1){
            for (let i: number = indice; i < this._produtos.length; i++) {
                this._produtos[i] = this._produtos[i+1];
            }
            this._produtos.pop();
        }
    }

    public repor(id: number, quantidade: number): void{
        let indice: number = this.consultarIndice(id);
        let produto: Produto = this._produtos[indice]
        
        if(indice != -1){
            if(produto instanceof ProdutoPerecivel){
                (<ProdutoPerecivel> produto).repor(quantidade);
            }

            if(produto instanceof Produto){
                produto.repor(quantidade)
            }
        }
    }

    public darBaixa(id: number, quantidade: number): void{
        let indice: number = this.consultarIndice(id);
        let produto: Produto = this._produtos[indice]
        
        if(indice != -1){
            if(produto instanceof ProdutoPerecivel){
                (<ProdutoPerecivel> produto).darBaixa(quantidade);
            }

            if(produto instanceof Produto){
                produto.darBaixa(quantidade)
            }
        }
    }

    public listarVencidos(){
        console.log("\nProdutos Vencidos:\n")
        let produto: Produto;

        for (let i = 0; i < this._produtos.length; i++) {
            produto = this._produtos[i]
            if(produto instanceof ProdutoPerecivel){
                if(!produto.ehValido()){
                    console.log(`ID: ${produto.identificador}`)
                    console.log(`Nome: ${produto.descricao}`)
                    console.log(`Quantidade de Produtos: ${produto.quantidadeDeProdutos}\n`)
                }
            }
        }
    }
}