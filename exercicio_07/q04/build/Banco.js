import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaImposto } from "./ContaImposto.js";
export class Banco {
    constructor() {
        this.contas = [];
    }
    inserir(c) {
        let contaAtual = c;
        if (this.consultarIndice(contaAtual.numero) == -1) {
            this.contas.push(contaAtual);
            return true;
        }
        else {
            return false;
        }
    }
    consultar(numero) {
        let contaProcurada;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }
        return contaProcurada;
    }
    consultarIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterar(c) {
        let indice = this.consultarIndice(c.numero);
        if (indice != -1) {
            this.contas[indice] = c;
            return true;
        }
        return false;
    }
    excluir(numero) {
        let indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
    sacar(numero, valor) {
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                if (this.contas[i] instanceof ContaImposto) {
                    return this.contas[i].debitar(valor);
                }
                else {
                    return (this.contas[i].sacar(valor));
                }
            }
        }
        return false;
    }
    transferir(numeroCredito, numeroDebito, valor) {
        let indiceDebito = this.consultarIndice(numeroCredito);
        let indiceCredito = this.consultarIndice(numeroDebito);
        let contaCreditada = this.contas[indiceCredito];
        let contaDebitada = this.contas[indiceDebito];
        if (indiceDebito != -1 && indiceCredito != -1) {
            return contaDebitada.transferir(contaCreditada, valor);
        }
        else {
            return false;
        }
    }
    qtdDeContas() {
        return this.contas.length;
    }
    dinheiroTotalBanco() {
        const qtdDeContas = this.qtdDeContas();
        let saldoTotal = 0;
        for (let i = 0; i < qtdDeContas; i++) {
            saldoTotal += this.contas[i].saldo;
        }
        return saldoTotal;
    }
    mediaSaldo() {
        return ((this.dinheiroTotalBanco()) / (this.qtdDeContas()));
    }
    renderJuros(numero) {
        const indiceConta = this.consultarIndice(numero);
        if (indiceConta != -1) {
            const contaEncontrada = this.contas[indiceConta];
            if (contaEncontrada instanceof ContaPoupanca) {
                contaEncontrada.renderJuros();
            }
        }
    }
}
//Polimorfismo é útil para a criação de um vetor da superclasse, dessa forma
//é necessário fazer o cast quando formos trabalhar com as classes filhas.
