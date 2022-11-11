import {inserir, consultar, sacar, depositar, excluir, transferir, addContasPorArquivo, renderJuros} from "./functions";
import prompt from "prompt-sync";

let input = prompt();

function main(){

    let opcao: string = '';

    do {
        console.clear();
        console.log('\nBem vindo\nDigite uma opção:');
        console.log('1 - Cadastrar      2 - Consultar       3 - Sacar\n' +
                    '4 - Depositar      5 - Excluir         6 - Transferir\n' +
                    '7 - Render Juros   8 - Inserir Contas por Arquivo\n'+
                    '0 - Sair\n');

        try {
            opcao = input("Opção: ");
            console.clear();

            switch (opcao) {
                case "1":
                    inserir();
                    break
                case "2":
                    consultar();
                    break
                case "3":
                    sacar();
                    break
                case "4":
                    depositar();
                    break;
                case "5":
                    excluir();
                    break;
                case "6":
                    transferir();
                    break;
                case "7":
                    renderJuros();
                    break;
                case "8":
                    addContasPorArquivo();
                    break;
            }

        } catch (e: any){
            console.log("Error: " + e.message);
        }         
        
        input("Operação finalizada. Digite <enter>");

        } while (opcao != "0");
        console.log("Aplicação encerrada");

} main()