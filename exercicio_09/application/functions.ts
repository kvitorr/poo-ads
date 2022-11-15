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
    console.log("0 - Comum  1 - Poupança  2 - Imposto")

    const opcao = lerOpcao("Digite a opção: ", 3);
    let numero: string = String(lerNumero("Digite o número da conta: "));
    let saldo: number = lerNumero("Digite o saldo da conta: ");
    
    let conta: Conta;

    console.clear()

    switch (opcao) {
        case "0":
            console.log("Conta Comum");
            conta = new Conta(numero, saldo);
            b.inserir(conta);
            
            break
        case "1":
            console.log("Conta Poupança");
            const taxa: number = Number(input("Taxa de juros"));
            conta = new ContaPoupanca(numero, saldo, taxa);
            b.inserir(conta);
            break
        case "2":
            console.log("Conta Imposto");
            const taxaDesconto: number = Number(input("Taxa de juros"));
            conta = new ContaImposto(numero, saldo, taxaDesconto);
            b.inserir(conta);
            break
    }
}

export function consultar(): void {
    console.log("\nConsultar conta\n")
    let numero: string = String(lerNumero("Digite o número da conta: "));

    const conta: Conta = b.consultar(numero);
    console.log(`Número da conta: ${conta.numero}`)
    console.log(`Saldo: ${conta.saldo}`)
}

export function sacar(): void{
    console.log("\nSacar da conta\n");
    let numero: string = String(lerNumero("Digite o número da conta: "));
    let valor: number = lerNumero("Valor: ");

    const conta: Conta = b.consultar(numero);
    conta.sacar(valor)
}

export function depositar(): void{
    console.log("\nDepositar na conta\n");
    let numero: string = String(lerNumero("Digite o número da conta: "));
    let valor: number = lerNumero("Valor: ");

    const conta: Conta = b.consultar(numero);
    conta.depositar(valor);
}

export function excluir(): void{
    console.log("\nExcluir conta\n");
    let numero: string = String(lerNumero("Digite o número da conta: "));
    const conta: Conta = b.consultar(numero);

    b.excluir(conta.numero);
}

export function transferir(): void{
    console.log("\nTransferência\n");
    const numeroTransferir: string = String(lerNumero("Digite o número da sua conta: "));
    const numeroReceber: string = String(lerNumero("Digite o número da conta a receber: "));
    const valor: number = lerNumero("Valor: ");

    b.transferir(numeroTransferir, numeroReceber, valor)
}

export function renderJuros(): void{
    console.log("\nRender Juros\n");
    const numeroTransferir: string = String(lerNumero("Digite o número da conta: "));
    const conta: Conta = b.consultar(numeroTransferir);

    b.renderJuros(conta.numero);
}


export function addContasPorArquivo(): void{
    let arquivo = fs.readFileSync('./contas.txt', 'utf-8').split('\r\n');

    //console.log(arquivo)
    let tipoConta, numeroConta, saldo, taxa;

    for (let i = 0; i < arquivo.length; i++) {
        [tipoConta, numeroConta, saldo, taxa] = arquivo[i].split(';')
        let conta1: Conta;

        if(tipoConta == "C"){
            conta1 = new Conta(numeroConta, Number(saldo))
            b.inserir(conta1);
        } else if (tipoConta == "P") {
            conta1 = new ContaPoupanca(numeroConta, Number(saldo), Number(taxa))
            b.inserir(conta1);
        } else if (tipoConta == "CI"){
            conta1 = new ContaImposto(numeroConta, Number(saldo), Number(taxa))
            b.inserir(conta1);
        }
    }
}

export function mostrarContas(): void{
    b.mostrarContas();
}


export function menuOption(option: string): void{
    switch (option) {
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
        case "9":
            mostrarContas();
            break;
    }
}


export function lerNumero(msg: string): number{
    let entrada = Number(input(msg));
    
    if(isNaN(entrada)){
        throw new Error('O que foi digitado não é um número.')
    } else {
        return entrada;
    }
}

export function lerOpcao(msg: string, elementos: number = 1): string {
    const entrada: number = Number(input(msg));
    const vetorOpcoes: number[] = [];

    for (let i = 0; i < elementos; i++) {
        vetorOpcoes.push(i);
    }

    if(vetorOpcoes[entrada] == entrada){
        return String(entrada);
    } else {
        throw new Error('Opção digitada não existe.')
    }
}