"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
class Banco {
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
                return (this.contas[i].sacar(valor));
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
}
exports.Banco = Banco;
