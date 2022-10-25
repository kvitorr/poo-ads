import { inserirProduto, consultar, excluirProduto, darBaixa, reporProduto, addProdutosPorArquivo, listarVencidos } from "./functions.js";
import prompt from "prompt-sync";
let input = prompt();
function main() {
    let opcao = '';
    do {
        console.clear();
        console.log('\nBem vindo\nDigite uma opção:');
        console.log('1 - Cadastrar Produto\n' +
            '2 - Consultar\n' +
            '3 - Excluir Produto\n' +
            '4 - Repor Produto\n' +
            '5 - Dar Baixa Produto\n' +
            '6 - Listar Produtos Vencidos\n' +
            '7 - Inserir Produtos por Arquivo\n\n' +
            '0 - Sair\n');
        opcao = input("Opção: ");
        console.clear();
        switch (opcao) {
            case "1":
                inserirProduto();
                break;
            case "2":
                consultar();
                break;
            case "3":
                excluirProduto();
                break;
            case "4":
                reporProduto();
                break;
            case "5":
                darBaixa();
                break;
            case "6":
                listarVencidos();
                break;
            case "7":
                addProdutosPorArquivo();
                break;
        }
        input("Operação finalizada. Digite <enter>");
    } while (opcao != "0");
    console.log("Aplicação encerrada");
}
main();
