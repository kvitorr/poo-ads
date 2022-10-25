import { Produto } from "./Produto.js";

export class ProdutoPerecivel extends Produto {

    private _dataDeValidade: Date;

    constructor(identificador: number, descricao: string, 
        quantidadeDeProdutos: number, valorUnitario: number,
        dataDeValidade: Date){
            super(identificador, descricao, quantidadeDeProdutos, valorUnitario)
            this._dataDeValidade = dataDeValidade;
        }

    public get dataDeValidade(): Date{
        return this._dataDeValidade
    }


    public ehValido(): boolean{
        let date: Date = new Date();
        return this._dataDeValidade >= date;
    }

    public repor(quantidade: number): void{
        if(this.ehValido()){
            super.repor(quantidade);
        }
    }

    public darBaixa(quantidade: number): void{
        if(this.ehValido()){
            if(this.quantidadeDeProdutos - quantidade >= 0){
                super.darBaixa(quantidade);
            }
        }
    }




}