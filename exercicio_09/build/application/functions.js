"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lerOpcao = exports.lerNumero = exports.menuOption = exports.mostrarContas = exports.addContasPorArquivo = exports.renderJuros = exports.transferir = exports.excluir = exports.depositar = exports.sacar = exports.consultar = exports.inserir = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Banco_js_1 = require("../entities/Banco.js");
const Conta_js_1 = require("../entities/Conta.js");
const ContaPoupanca_js_1 = require("../entities/ContaPoupanca.js");
const ContaImposto_js_1 = require("../entities/ContaImposto.js");
const fs_1 = __importDefault(require("fs"));
let input = (0, prompt_sync_1.default)();
let b = new Banco_js_1.Banco();
function inserir() {
    console.log("\nCadastrar conta\n");
    console.log("Selecione o tipo de conta:");
    console.log("0 - Comum  1 - Poupança  2 - Imposto");
    const opcao = lerOpcao("Digite a opção: ", 3);
    let numero = String(lerNumero("Digite o número da conta: "));
    let saldo = lerNumero("Digite o saldo da conta: ");
    let conta;
    console.clear();
    switch (opcao) {
        case "0":
            console.log("Conta Comum");
            conta = new Conta_js_1.Conta(numero, saldo);
            b.inserir(conta);
            break;
        case "1":
            console.log("Conta Poupança");
            const taxa = lerNumero("Taxa de juros");
            conta = new ContaPoupanca_js_1.ContaPoupanca(numero, saldo, taxa);
            b.inserir(conta);
            break;
        case "2":
            console.log("Conta Imposto");
            const taxaDesconto = lerNumero("Taxa de juros");
            conta = new ContaImposto_js_1.ContaImposto(numero, saldo, taxaDesconto);
            b.inserir(conta);
            break;
    }
}
exports.inserir = inserir;
function consultar() {
    console.log("\nConsultar conta\n");
    let numero = String(lerNumero("Digite o número da conta: "));
    const conta = b.consultar(numero);
    console.log(`Número da conta: ${conta.numero}`);
    console.log(`Saldo: ${conta.saldo}`);
}
exports.consultar = consultar;
function sacar() {
    console.log("\nSacar da conta\n");
    let numero = String(lerNumero("Digite o número da conta: "));
    let valor = lerNumero("Valor: ");
    const conta = b.consultar(numero);
    conta.sacar(valor);
}
exports.sacar = sacar;
function depositar() {
    console.log("\nDepositar na conta\n");
    let numero = String(lerNumero("Digite o número da conta: "));
    let valor = lerNumero("Valor: ");
    const conta = b.consultar(numero);
    conta.depositar(valor);
}
exports.depositar = depositar;
function excluir() {
    console.log("\nExcluir conta\n");
    let numero = String(lerNumero("Digite o número da conta: "));
    const conta = b.consultar(numero);
    b.excluir(conta.numero);
}
exports.excluir = excluir;
function transferir() {
    console.log("\nTransferência\n");
    const numeroTransferir = String(lerNumero("Digite o número da sua conta: "));
    const numeroReceber = String(lerNumero("Digite o número da conta a receber: "));
    const valor = lerNumero("Valor: ");
    b.transferir(numeroTransferir, numeroReceber, valor);
}
exports.transferir = transferir;
function renderJuros() {
    console.log("\nRender Juros\n");
    const numeroTransferir = String(lerNumero("Digite o número da conta: "));
    const conta = b.consultar(numeroTransferir);
    b.renderJuros(conta.numero);
}
exports.renderJuros = renderJuros;
function addContasPorArquivo() {
    let arquivo = fs_1.default.readFileSync('./contas.txt', 'utf-8').split('\r\n');
    //console.log(arquivo)
    let tipoConta, numeroConta, saldo, taxa;
    for (let i = 0; i < arquivo.length; i++) {
        [tipoConta, numeroConta, saldo, taxa] = arquivo[i].split(';');
        let conta1;
        if (tipoConta == "C") {
            conta1 = new Conta_js_1.Conta(numeroConta, Number(saldo));
            b.inserir(conta1);
        }
        else if (tipoConta == "P") {
            conta1 = new ContaPoupanca_js_1.ContaPoupanca(numeroConta, Number(saldo), Number(taxa));
            b.inserir(conta1);
        }
        else if (tipoConta == "CI") {
            conta1 = new ContaImposto_js_1.ContaImposto(numeroConta, Number(saldo), Number(taxa));
            b.inserir(conta1);
        }
    }
}
exports.addContasPorArquivo = addContasPorArquivo;
function mostrarContas() {
    b.mostrarContas();
}
exports.mostrarContas = mostrarContas;
function menuOption(option) {
    switch (option) {
        case "1":
            inserir();
            break;
        case "2":
            consultar();
            break;
        case "3":
            sacar();
            break;
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
        case "9":
            mostrarContas();
            break;
    }
}
exports.menuOption = menuOption;
function lerNumero(msg) {
    let entrada = Number(input(msg));
    if (isNaN(entrada)) {
        throw new Error('O que foi digitado não é um número.');
    }
    else {
        return entrada;
    }
}
exports.lerNumero = lerNumero;
function lerOpcao(msg, elementos = 1) {
    const entrada = Number(input(msg));
    const vetorOpcoes = [];
    for (let i = 0; i < elementos; i++) {
        vetorOpcoes.push(i);
    }
    if (vetorOpcoes[entrada] == entrada) {
        return String(entrada);
    }
    else {
        throw new Error('Opção digitada não existe.');
    }
}
exports.lerOpcao = lerOpcao;
