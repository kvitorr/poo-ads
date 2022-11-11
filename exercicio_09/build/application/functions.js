"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContasPorArquivo = exports.renderJuros = exports.transferir = exports.excluir = exports.depositar = exports.sacar = exports.consultar = exports.inserir = void 0;
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
    console.log("1 - Comum  2 - Poupança  3 - Imposto");
    const opcao = input("Digite a opção: ");
    let numero = input("Digite o número da conta: ");
    let saldo = Number(input("Digite o saldo da conta: "));
    let conta;
    console.clear();
    switch (opcao) {
        case "1":
            console.log("Conta Comum");
            conta = new Conta_js_1.Conta(numero, saldo);
            b.inserir(conta);
            break;
        case "2":
            console.log("Conta Poupança");
            const taxaJuros = Number(input("Taxa de juros"));
            conta = new ContaPoupanca_js_1.ContaPoupanca(numero, saldo, taxaJuros);
            b.inserir(conta);
            break;
        case "3":
            console.log("Conta Imposto");
            const taxaDesconto = Number(input("Taxa de juros"));
            conta = new ContaImposto_js_1.ContaImposto(numero, saldo, taxaDesconto);
            b.inserir(conta);
            break;
    }
}
exports.inserir = inserir;
function consultar() {
    console.log("\nConsultar conta\n");
    let numero = input("Digite o número da conta: ");
    const conta = b.consultar(numero);
    console.log(`Número da conta: ${conta.numero}`);
    console.log(`Saldo: ${conta.saldo}`);
}
exports.consultar = consultar;
function sacar() {
    console.log("\nSacar da conta\n");
    let numero = input("Digite o número da conta: ");
    let valor = Number(input("Valor: "));
    const conta = b.consultar(numero);
    conta.sacar(valor);
}
exports.sacar = sacar;
function depositar() {
    console.log("\nDepositar na conta\n");
    let numero = input("Digite o número da conta: ");
    let valor = Number(input("Valor: "));
    const conta = b.consultar(numero);
    conta.depositar(valor);
}
exports.depositar = depositar;
function excluir() {
    console.log("\nExcluir conta\n");
    let numero = input("Digite o número da conta: ");
    const conta = b.consultar(numero);
    b.excluir(conta.numero);
}
exports.excluir = excluir;
function transferir() {
    console.log("\nTransferência\n");
    const numeroTransferir = input("Digite o número da sua conta: ");
    const numeroReceber = input("Digite o número da conta a receber: ");
    const valor = Number(input("Valor: "));
    b.transferir(numeroTransferir, numeroReceber, valor);
}
exports.transferir = transferir;
function renderJuros() {
    console.log("\nRender Juros\n");
    const numeroTransferir = input("Digite o número da conta: ");
    const conta = b.consultar(numeroTransferir);
    b.renderJuros(conta.numero);
}
exports.renderJuros = renderJuros;
function addContasPorArquivo() {
    let arquivo = fs_1.default.readFileSync('./contas.txt', 'utf-8').split('\r\n');
    //console.log(arquivo)
    let linha;
    for (let i = 0; i < arquivo.length; i++) {
        linha = arquivo[i].split(';');
        //console.log(linha)
        let conta1;
        if (linha[0] == "C") {
            conta1 = new Conta_js_1.Conta(linha[1], Number(linha[2]));
            b.inserir(conta1);
        }
        else if (linha[0] == "P") {
            conta1 = new ContaPoupanca_js_1.ContaPoupanca(linha[1], Number(linha[2]), Number(linha[3]));
            b.inserir(conta1);
        }
        else if (linha[0] == "CI") {
            conta1 = new ContaImposto_js_1.ContaImposto(linha[1], Number(linha[2]), Number(linha[3]));
            b.inserir(conta1);
        }
    }
}
exports.addContasPorArquivo = addContasPorArquivo;
