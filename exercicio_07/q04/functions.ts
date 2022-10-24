import prompt from "prompt-sync";
import { Banco } from "./Banco.js";
import { Conta } from "./Conta.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaImposto } from "./ContaImposto.js";
import fs from 'fs';

let input = prompt();
let b: Banco = new Banco();



export function inserir(): void{
    console.log("\nCadastrar conta\n");

    console.log("Selecione o tipo de conta:")
    console.log("1 - Comum  2 - Poupança  3 - Imposto")

    const opcao = input("Digite a opção: ")
    let numero: string = input("Digite o número da conta: ");
    let conta: Conta;

    console.clear()

    switch (opcao) {
        case "1":
            console.log("Conta Comum")
            conta = new Conta(numero, 0);
            b.inserir(conta);
            
            break
        case "2":
            console.log("Conta Poupança")
            const taxaJuros: number = Number(input("Taxa de juros"))
            conta = new ContaPoupanca(numero, 0, taxaJuros);
            b.inserir(conta);
            break
        case "3":
            console.log("Conta Imposto")
            const taxaDesconto: number = Number(input("Taxa de juros"))
            conta = new ContaImposto(numero, 0, taxaDesconto);
            b.inserir(conta);
            break
    }
}

export function consultar(): void {
    console.log("\nConsultar conta\n")
    let numero: string = input("Digite o número da conta: ")

    if(b.consultar(numero)){
        const conta: Conta = b.consultar(numero);
        console.log(`Número da conta: ${conta.numero}`)
        console.log(`Saldo: ${conta.saldo}`)
    } else {
        console.log("Conta não encontrada");
    }
}

export function sacar(): void{
    console.log("\nSacar da conta\n");
    let numero: string = input("Digite o número da conta: ");
    let valor: number = Number(input("Valor: "));

    if(b.consultar(numero)){
        const conta: Conta = b.consultar(numero);
        if(!conta.sacar(valor)) console.log("Não foi possível realizar o saque.")
    } else {
        console.log("Conta não encontrada");
    }
}

export function depositar(): void{
    console.log("\nDepositar na conta\n");
    let numero: string = input("Digite o número da conta: ");
    let valor: number = Number(input("Valor: "));

    const conta: Conta = b.consultar(numero);

    if(b.consultar(numero)){
        conta.depositar(valor);
    } else {
        console.log("Conta não encontrada");
    }
}

export function excluir(): void{
    console.log("\nExcluir conta\n");
    let numero: string = input("Digite o número da conta: ");

    const conta: Conta = b.consultar(numero);

    if(b.consultar(numero)){
        b.excluir(conta.numero);
    } else {
        console.log("Conta não encontrada");
    }
}

export function transferir(): void{
    console.log("\nTransferência\n");
    const numeroTransferir: string = input("Digite o número da sua conta: ");
    const numeroReceber: string = input("Digite o número da conta a receber: ");
    const valor: number = Number(input("Valor: "))


    const contaTransferir: Conta = b.consultar(numeroTransferir);
    const contaReceber: Conta = b.consultar(numeroReceber);


    if(!b.transferir(numeroTransferir, numeroReceber, valor)) console.log("Transferência não concluída")
}

export function renderJuros(): void{
    console.log("\nRender Juros\n");
    const numeroTransferir: string = input("Digite o número da conta: ");
    const conta: Conta = b.consultar(numeroTransferir);

    if(conta instanceof ContaPoupanca){
        b.renderJuros(conta.numero);
    } else {
        console.log("A conta escolhida não é poupança")
    }
}


export function addContasPorArquivo(): void{
    let arquivo = fs.readFileSync('../contas.txt', 'utf-8').split('\r\n');

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