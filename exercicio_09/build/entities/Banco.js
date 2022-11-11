"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
const ContaPoupanca_js_1 = require("./ContaPoupanca.js");
const ContaImposto_js_1 = require("./ContaImposto.js");
const ContaInexistenteError_js_1 = require("../exceptions/ContaInexistenteError.js");
const ContaExistenteError_js_1 = require("../exceptions/ContaExistenteError.js");
const PoupancaInvalidaError_js_1 = require("../exceptions/PoupancaInvalidaError.js");
class Banco {
    constructor() {
        this.contas = [];
    }
    inserir(c) {
        try {
            this.consultarIndice(c.numero);
            throw new ContaExistenteError_js_1.ContaExistenteError("Conta já existente no banco. " + c.numero);
        }
        catch (e) {
            if (e instanceof ContaInexistenteError_js_1.ContaInexistenteError) {
                this.contas.push(c);
            }
            else {
                throw new ContaExistenteError_js_1.ContaExistenteError("Conta já existente no banco. " + c.numero);
            }
        }
    }
    consultar(numero) {
        let contaProcurada;
        let indice = this.consultarIndice(numero);
        contaProcurada = this.contas[indice];
        return contaProcurada;
    }
    consultarIndice(numero) {
        let indice;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                return indice;
            }
        }
        throw new ContaInexistenteError_js_1.ContaInexistenteError("Conta não encontrada. " + numero);
    }
    alterar(c) {
        let indice = this.consultarIndice(c.numero);
        this.contas[indice] = c;
    }
    excluir(numero) {
        let indice = this.consultarIndice(numero);
        //Substituir por splice(indice, 1)
        for (let i = indice; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i + 1];
        }
        this.contas.pop();
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        conta.depositar(valor);
    }
    sacar(numero, valor) {
        const indice = this.consultarIndice(numero);
        let contaProcurada = this.contas[indice];
        if (contaProcurada instanceof ContaImposto_js_1.ContaImposto) {
            contaProcurada.debitar(valor);
        }
        else {
            (contaProcurada.sacar(valor));
        }
    }
    transferir(numeroOrigem, numeroDestino, valor) {
        let indiceOrigem = this.consultarIndice(numeroOrigem);
        let indiceDestino = this.consultarIndice(numeroDestino);
        let contaDestino = this.contas[indiceDestino];
        let contaOrigem = this.contas[indiceOrigem];
        contaOrigem.transferir(contaDestino, valor);
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
        const contaEncontrada = this.contas[indiceConta];
        if (contaEncontrada instanceof ContaPoupanca_js_1.ContaPoupanca) {
            contaEncontrada.renderJuros();
        }
        else {
            throw new PoupancaInvalidaError_js_1.PoupancaInvalidaError("A conta não é poupança.");
        }
    }
}
exports.Banco = Banco;
//Polimorfismo é útil para a criação de um vetor da superclasse, dessa forma
//é necessário fazer o cast quando formos trabalhar com as classes filhas.
