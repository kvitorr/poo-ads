"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let input = (0, prompt_sync_1.default)();
function main() {
    let opcao = '';
    do {
        console.clear();
        console.log('\nBem vindo\nDigite uma opção:');
        console.log('1 - Cadastrar      2 - Consultar       3 - Sacar\n' +
            '4 - Depositar      5 - Excluir         6 - Transferir\n' +
            '7 - Render Juros   8 - Inserir Contas por Arquivo\n' +
            '0 - Sair\n');
        try {
            opcao = input("Opção: ");
            console.clear();
            switch (opcao) {
                case "1":
                    (0, functions_1.inserir)();
                    break;
                case "2":
                    (0, functions_1.consultar)();
                    break;
                case "3":
                    (0, functions_1.sacar)();
                    break;
                case "4":
                    (0, functions_1.depositar)();
                    break;
                case "5":
                    (0, functions_1.excluir)();
                    break;
                case "6":
                    (0, functions_1.transferir)();
                    break;
                case "7":
                    (0, functions_1.renderJuros)();
                    break;
                case "8":
                    (0, functions_1.addContasPorArquivo)();
                    break;
            }
        }
        catch (e) {
            console.log("Error: " + e.message);
        }
        input("Operação finalizada. Digite <enter>");
    } while (opcao != "0");
    console.log("Aplicação encerrada");
}
main();
