import prompt from "prompt-sync";
import { Banco } from "./Banco.js";
import { Conta } from "./Conta.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaImposto } from "./ContaImposto.js";
import fs from 'fs';
let input = prompt();
let b = new Banco();
export function inserir() {
    console.log("\nCadastrar conta\n");
    console.log("Selecione o tipo de conta:");
    console.log("1 - Comum  2 - Poupança  3 - Imposto");
    const opcao = input("Digite a opção: ");
    let numero = input("Digite o número da conta: ");
    let conta;
    console.clear();
    switch (opcao) {
        case "1":
            console.log("Conta Comum");
            conta = new Conta(numero, 0);
            b.inserir(conta);
            break;
        case "2":
            console.log("Conta Poupança");
            const taxaJuros = Number(input("Taxa de juros"));
            conta = new ContaPoupanca(numero, 0, taxaJuros);
            b.inserir(conta);
            break;
        case "3":
            console.log("Conta Imposto");
            const taxaDesconto = Number(input("Taxa de juros"));
            conta = new ContaImposto(numero, 0, taxaDesconto);
            b.inserir(conta);
            break;
    }
}
export function consultar() {
    console.log("\nConsultar conta\n");
    let numero = input("Digite o número da conta: ");
    if (b.consultar(numero)) {
        const conta = b.consultar(numero);
        console.log(`Número da conta: ${conta.numero}`);
        console.log(`Saldo: ${conta.saldo}`);
    }
    else {
        console.log("Conta não encontrada");
    }
}
export function sacar() {
    console.log("\nSacar da conta\n");
    let numero = input("Digite o número da conta: ");
    let valor = Number(input("Valor: "));
    if (b.consultar(numero)) {
        const conta = b.consultar(numero);
        if (!conta.sacar(valor))
            console.log("Não foi possível realizar o saque.");
    }
    else {
        console.log("Conta não encontrada");
    }
}
export function depositar() {
    console.log("\nDepositar na conta\n");
    let numero = input("Digite o número da conta: ");
    let valor = Number(input("Valor: "));
    const conta = b.consultar(numero);
    if (b.consultar(numero)) {
        conta.depositar(valor);
    }
    else {
        console.log("Conta não encontrada");
    }
}
export function excluir() {
    console.log("\nExcluir conta\n");
    let numero = input("Digite o número da conta: ");
    const conta = b.consultar(numero);
    if (b.consultar(numero)) {
        b.excluir(conta.numero);
    }
    else {
        console.log("Conta não encontrada");
    }
}
export function transferir() {
    console.log("\nTransferência\n");
    const numeroTransferir = input("Digite o número da sua conta: ");
    const numeroReceber = input("Digite o número da conta a receber: ");
    const valor = Number(input("Valor: "));
    const contaTransferir = b.consultar(numeroTransferir);
    const contaReceber = b.consultar(numeroReceber);
    if (!b.transferir(numeroTransferir, numeroReceber, valor))
        console.log("Transferência não concluída");
}
export function renderJuros() {
    console.log("\nRender Juros\n");
    const numeroTransferir = input("Digite o número da conta: ");
    const conta = b.consultar(numeroTransferir);
    if (conta instanceof ContaPoupanca) {
        b.renderJuros(conta.numero);
    }
    else {
        console.log("A conta escolhida não é poupança");
    }
}
export function addContasPorArquivo() {
    let arquivo = fs.readFileSync('../contas.txt', 'utf-8').split('\r\n');
    //console.log(arquivo)
    let linha;
    for (let i = 0; i < arquivo.length; i++) {
        linha = arquivo[i].split(';');
        //console.log(linha)
        let conta1;
        if (linha[0] == "C") {
            conta1 = new Conta(linha[1], Number(linha[2]));
            b.inserir(conta1);
        }
        else if (linha[0] == "P") {
            conta1 = new ContaPoupanca(linha[1], Number(linha[2]), Number(linha[3]));
            b.inserir(conta1);
        }
        else if (linha[0] == "CI") {
            conta1 = new ContaImposto(linha[1], Number(linha[2]), Number(linha[3]));
            b.inserir(conta1);
        }
    }
}
