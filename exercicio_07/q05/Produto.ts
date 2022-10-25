export class Produto {
    private _identificador: number;
    private _descricao: string;
    private _quantidadeDeProdutos: number;
    private _valorUnitario: number;

    constructor(identificador: number, descricao: string, 
        quantidadeDeProdutos: number, valorUnitario: number){
            this._identificador = identificador;
            this._descricao = descricao;
            this._quantidadeDeProdutos = quantidadeDeProdutos;
            this._valorUnitario = valorUnitario;
        }

    public get identificador(): number{
        return this._identificador;
    }

    public get descricao(): string{
        return this._descricao
    }

    public get quantidadeDeProdutos(): number{
        return this._quantidadeDeProdutos
    }

    public get valorUnitario(): number{
        return this._valorUnitario
    }

    public repor(quantidade: number): void{
        this._quantidadeDeProdutos += quantidade;
    }

    public darBaixa(quantidade: number): void{
        if(this._quantidadeDeProdutos - quantidade >= 0){
            this._quantidadeDeProdutos -= quantidade;
        }
    }
}