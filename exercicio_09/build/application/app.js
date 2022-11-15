"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const functions_1 = require("./functions");
let input = (0, prompt_sync_1.default)();
function main() {
    let opcao = '';
    do {
        console.clear();
        console.log('\nBem vindo\nDigite uma opção:');
        console.log('1 - Cadastrar          2 - Consultar                         3 - Sacar\n' +
            '4 - Depositar          5 - Excluir                           6 - Transferir\n' +
            '7 - Render Juros       8 - Inserir Contas por Arquivo        9 - Mostrar contas\n' +
            '0 - Sair\n');
        try {
            opcao = (0, functions_1.lerOpcao)("Opção: ", 10);
            console.clear();
            (0, functions_1.menuOption)(opcao);
        }
        catch (e) {
            console.log("Error: " + e.message);
        }
        input("Operação finalizada. Digite <enter>");
    } while (opcao != "0");
    console.log("Aplicação encerrada");
}
main();
