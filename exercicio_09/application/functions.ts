import prompt from "prompt-sync";
import { Banco } from "../entities/Banco.js";
import { Conta } from "../entities/Conta.js";
import { ContaPoupanca } from "../entities/ContaPoupanca.js";
import { ContaImposto } from "../entities/ContaImposto.js"
import fs from 'fs';

let input = prompt();
let b: Banco = new Banco();


export function inserir(): void{
    console.log("\nCadastrar conta\n");

    console.log("Selecione o tipo de conta:")
    console.log("1 - Comum  2 - Poupança  3 - Imposto")

    const opcao = input("Digite a opção: ")
    let numero: string = input("Digite o número da conta: ");
    let saldo: number = Number(input("Digite o saldo da conta: "));

    let conta: Conta;

    console.clear()

    switch (opcao) {
        case "1":
            console.log("Conta Comum")
            conta = new Conta(numero, saldo);
            b.inserir(conta);
            
            break
        case "2":
            console.log("Conta Poupança")
            const taxaJuros: number = Number(input("Taxa de juros"))
            conta = new ContaPoupanca(numero, saldo, taxaJuros);
            b.inserir(conta);
            break
        case "3":
            console.log("Conta Imposto")
            const taxaDesconto: number = Number(input("Taxa de juros"))
            conta = new ContaImposto(numero, saldo, taxaDesconto);
            b.inserir(conta);
            break
    }
}

export function consultar(): void {
    console.log("\nConsultar conta\n")
    let numero: string = input("Digite o número da conta: ")

    const conta: Conta = b.consultar(numero);
    console.log(`Número da conta: ${conta.numero}`)
    console.log(`Saldo: ${conta.saldo}`)
}

export function sacar(): void{
    console.log("\nSacar da conta\n");
    let numero: string = input("Digite o número da conta: ");
    let valor: number = Number(input("Valor: "));

    const conta: Conta = b.consultar(numero);
    conta.sacar(valor)
}

export function depositar(): void{
    console.log("\nDepositar na conta\n");
    let numero: string = input("Digite o número da conta: ");
    let valor: number = Number(input("Valor: "));

    const conta: Conta = b.consultar(numero);
    conta.depositar(valor);
}

export function excluir(): void{
    console.log("\nExcluir conta\n");
    let numero: string = input("Digite o número da conta: ");
    const conta: Conta = b.consultar(numero);

    b.excluir(conta.numero);
}

export function transferir(): void{
    console.log("\nTransferência\n");
    const numeroTransferir: string = input("Digite o número da sua conta: ");
    const numeroReceber: string = input("Digite o número da conta a receber: ");
    const valor: number = Number(input("Valor: "))

    b.transferir(numeroTransferir, numeroReceber, valor)
}

export function renderJuros(): void{
    console.log("\nRender Juros\n");
    const numeroTransferir: string = input("Digite o número da conta: ");
    const conta: Conta = b.consultar(numeroTransferir);

    b.renderJuros(conta.numero);
}


export function addContasPorArquivo(): void{
    let arquivo = fs.readFileSync('./contas.txt', 'utf-8').split('\r\n');

    //console.log(arquivo)
    let linha;

    for (let i = 0; i < arquivo.length; i++) {
        linha = arquivo[i].split(';')
        //console.log(linha)
        let conta1: Conta;

        if(linha[0] == "C"){
            conta1 = new Conta(linha[1], Number(linha[2]))
            b.inserir(conta1);
        } else if (linha[0] == "P") {
            conta1 = new ContaPoupanca(linha[1], Number(linha[2]), Number(linha[3]))
            b.inserir(conta1);
        } else if (linha[0] == "CI"){
            conta1 = new ContaImposto(linha[1], Number(linha[2]), Number(linha[3]))
            b.inserir(conta1);
        }
    }
}