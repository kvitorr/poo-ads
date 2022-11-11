
import { Conta } from "./Conta.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaImposto } from "./ContaImposto.js"
import { ContaInexistenteError } from "../exceptions/ContaInexistenteError.js";
import { ContaExistenteError } from "../exceptions/ContaExistenteError.js";
import { PoupancaInvalidaError } from "../exceptions/PoupancaInvalidaError.js";

export class Banco {

    private contas: Conta[] = [];

    public inserir(c: Conta): void{    
        try {
            this.consultarIndice(c.numero);
            throw new ContaExistenteError("Conta já existente no banco. " + c.numero);
        } catch (e: any){
            if(e instanceof ContaInexistenteError){
                this.contas.push(c);
            } else {
                throw new ContaExistenteError("Conta já existente no banco. " + c.numero);
            }
        }
    }

    public consultar(numero: string): Conta{
        let contaProcurada: Conta;
        let indice = this.consultarIndice(numero);
        contaProcurada = this.contas[indice];
        return contaProcurada;
    }

    private consultarIndice(numero: string): number {
        let indice: number;
        for(let i: number = 0; i < this.contas.length; i++){
            if(this.contas[i].numero == numero){
                indice = i;
                return indice;
            }
        }
        throw new ContaInexistenteError("Conta não encontrada. " + numero)
    }

    public alterar(c: Conta): void {
        let indice: number = this.consultarIndice(c.numero);
        this.contas[indice] = c;
    }

    public excluir (numero: string): void {
        let indice: number = this.consultarIndice(numero);
        //Substituir por splice(indice, 1)
        for(let i: number = indice; i < this.contas.length; i++){
            this.contas[i] = this.contas[i+1];
        }
        this.contas.pop();
    }

    public depositar(numero: string, valor: number): void{
        let conta: Conta = this.consultar(numero);
        conta.depositar(valor);
    }

    public sacar(numero: string, valor: number): void{
        const indice = this.consultarIndice(numero);
        let contaProcurada: Conta = this.contas[indice];

        if(contaProcurada instanceof ContaImposto){
            (<ContaImposto> contaProcurada).debitar(valor);
        } else {
            (contaProcurada.sacar(valor));
        }
    }
    

    public transferir(numeroOrigem: string, numeroDestino: string, valor: number): void{
        let indiceOrigem: number = this.consultarIndice(numeroOrigem)
        let indiceDestino: number = this.consultarIndice(numeroDestino)

        let contaDestino: Conta = this.contas[indiceDestino]
        let contaOrigem: Conta = this.contas[indiceOrigem]

        contaOrigem.transferir(contaDestino, valor)
    }

    public qtdDeContas(): number{
        return this.contas.length;
    }

    public dinheiroTotalBanco(): number{
        const qtdDeContas: number = this.qtdDeContas()
        let saldoTotal: number = 0;
        for(let i: number = 0; i < qtdDeContas; i++){
            saldoTotal += this.contas[i].saldo;
        }
        return saldoTotal
    }

    public mediaSaldo(): number {
        return ((this.dinheiroTotalBanco())/(this.qtdDeContas()))
    }

    public renderJuros(numero: string): void{
        const indiceConta: number = this.consultarIndice(numero)
        const contaEncontrada: Conta = this.contas[indiceConta];

        if(contaEncontrada instanceof ContaPoupanca){
            (<ContaPoupanca> contaEncontrada).renderJuros();
        } else {
            throw new PoupancaInvalidaError("A conta não é poupança.")
        }
    }
}

//Polimorfismo é útil para a criação de um vetor da superclasse, dessa forma
//é necessário fazer o cast quando formos trabalhar com as classes filhas.