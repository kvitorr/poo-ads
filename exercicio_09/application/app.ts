import prompt from "prompt-sync";
import { menuOption, lerNumero, lerOpcao } from "./functions";

let input = prompt();

function main(){

    let opcao: string = '';

    do {
        console.clear();
        console.log('\nBem vindo\nDigite uma opção:');
        console.log('1 - Cadastrar          2 - Consultar                         3 - Sacar\n' +
                    '4 - Depositar          5 - Excluir                           6 - Transferir\n' +
                    '7 - Render Juros       8 - Inserir Contas por Arquivo        9 - Mostrar contas\n'+
                    '0 - Sair\n');

        try {
            opcao = lerOpcao("Opção: ", 10);

            console.clear();
            menuOption(opcao);
        } catch (e: any){
            console.log("Error: " + e.message);
        }         
        
        input("Operação finalizada. Digite <enter>");

        } while (opcao != "0");
        console.log("Aplicação encerrada");

} main()