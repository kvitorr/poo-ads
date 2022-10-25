import prompt from 'prompt-sync'
let input = prompt()
import { Estoque } from './Estoque.js'
import { Produto } from './Produto.js'
import { ProdutoPerecivel } from './ProdutoPerecivel.js';
import fs from 'fs';
let estoque1: Estoque = new Estoque();


export function inserirProduto(): void{
    console.log('\nCadastrar Produto\n')
    console.log('Tipo de produto: ')
    console.log('1 - Comum  2 - Perecível')
    const opcao: string = input('Selecione o tipo de produto: ')

    let produto: Produto;

    const id: number = Number(input("ID do produto: "));
    const descricao: string = input("Nome do produto: ");
    const quantidade: number = Number(input("Quantidade: "));
    const valorUnitario: number = Number(input("Valor unitário: "));

    if(opcao == '1'){
        produto = new Produto(id, descricao, quantidade, valorUnitario)
        estoque1.inserir(produto)
    } else if (opcao == '2'){
        const data: string = input('Data de validade: (aaaa-mm-dd)')
        let dataDeValidade: Date = new Date(data);
        produto = new ProdutoPerecivel(id, descricao, quantidade, valorUnitario, dataDeValidade)
        estoque1.inserir(produto)
    }
}

export function consultar(): void {

    console.log("\nConsultar Produto\n")
    const id: number = Number(input("ID do produto: "))

    const produto: Produto = estoque1.encontrarProduto(id);
    const indice: number = estoque1.consultarIndice(id)

    if(indice != -1){

        console.log(`\nProduto: ${produto.descricao}`)
        console.log(`ID: ${produto.identificador}`)
        console.log(`Quantidade: ${produto.quantidadeDeProdutos}`)
        console.log(`Valor Unitário: ${produto.valorUnitario}`)

        if(produto instanceof ProdutoPerecivel){
            console.log(`Data de Validade: ${(<ProdutoPerecivel> produto).dataDeValidade.toDateString()}\n`)
        }
    }
}

export function excluirProduto(): void{
    console.log("\nConsultar Produto\n")
    const id: number = Number(input("ID do produto: "))

    const produto: Produto = estoque1.encontrarProduto(id);

    if(estoque1.encontrarProduto(id)){
        estoque1.excluir(produto.identificador)
    }
}

export function darBaixa(): void {
    console.log("\nDar Baixa Produto\n")
    const id: number = Number(input("ID do produto: "))
    const valor: number = Number(input("Quantidade de produtos: "))

    if(estoque1.encontrarProduto(id)){
        estoque1.darBaixa(id, valor);
    }
}

export function reporProduto(): void {
    console.log("\nRepor Produto\n")
    const id: number = Number(input("ID do produto: "))
    const valor: number = Number(input("Quantidade de produtos: "))

    if(estoque1.encontrarProduto(id)){
        estoque1.repor(id, valor);
    }
}


export function addProdutosPorArquivo(): void{
    let arquivo = fs.readFileSync('../produtos.txt', 'utf-8').split('\r\n');

    //console.log(arquivo)
    let linha;
    for (let i = 0; i < arquivo.length; i++) {
        linha = arquivo[i].split(';')
        //console.log(linha)
        let produto1: Produto;

        if(linha[0] == "P"){
            produto1 = new Produto(Number(linha[1]), linha[2], Number(linha[3]), Number(linha[4]))
            estoque1.inserir(produto1);
        } else if (linha[0] == "PP") {
            produto1 = new ProdutoPerecivel(Number(linha[1]), linha[2], Number(linha[3]), Number(linha[4]), new Date(linha[5]))
            estoque1.inserir(produto1);
        }
    }
    
}

export function listarVencidos(): void{
    estoque1.listarVencidos();
}