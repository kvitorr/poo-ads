
import { Conta } from "./Conta.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaImposto } from "./ContaImposto.js"

export class Banco {

    private contas: Conta[] = [];

    public inserir(c: Conta): boolean{    
        let contaAtual: Conta = c;
        if(this.consultarIndice(contaAtual.numero) == -1){
            this.contas.push(contaAtual);
            return true;
        } else {
            return false
        }
    }

    public consultar(numero: string): Conta{
        let contaProcurada!: Conta;
        for(let i =0; i < this.contas.length; i++){
            if(this.contas[i].numero == numero){
                contaProcurada = this.contas[i];
                break;
            }
        }
        return contaProcurada;
    }

    private consultarIndice(numero: string): number {
        let indice: number = -1;
        for(let i: number = 0; i < this.contas.length; i++){
            if(this.contas[i].numero == numero){
                indice = i;
                break
            }
        }
        return indice;
    }

    public alterar(c: Conta): boolean {
        let indice: number = this.consultarIndice(c.numero);
        if(indice != -1){
            this.contas[indice] = c;
            return true;
        }
        return false;
    }

    public excluir (numero: string): void {
        let indice: number = this.consultarIndice(numero);

        if(indice != -1){
            for(let i: number = indice; i < this.contas.length; i++){
                this.contas[i] = this.contas[i+1];
            }
            this.contas.pop();
        }
    }

    public depositar(numero: string, valor: number){
        let conta: Conta = this.consultar(numero);

        if(conta != null) {
            conta.depositar(valor);
        }
    }

    public sacar(numero: string, valor: number): void{
        for (let i: number = 0; i < this.contas.length; i++) {
            if(this.contas[i].numero == numero){

                if(this.contas[i] instanceof ContaImposto){
                    (<ContaImposto> this.contas[i]).debitar(valor);
                } else {
                    (this.contas[i].sacar(valor));
                }
            }
        }
    }
    

    public transferir(numeroOrigem: string, numeroDestino: string, valor: number): void{
        let indiceOrigem: number = this.consultarIndice(numeroOrigem)
        let indiceDestino: number = this.consultarIndice(numeroDestino)

        let contaDestino: Conta = this.contas[indiceDestino]
        let contaOrigem: Conta = this.contas[indiceOrigem]

        if(indiceOrigem != -1 && indiceDestino != -1){
            contaOrigem.transferir(contaDestino, valor)
        } else {
            throw new Error('Conta transferência não encontrada.');
        }
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
        
        if(indiceConta != -1){
            const contaEncontrada: Conta = this.contas[indiceConta];
            if(contaEncontrada instanceof ContaPoupanca){
               (<ContaPoupanca> contaEncontrada).renderJuros();
            }
        }
    }
}

//Polimorfismo é útil para a criação de um vetor da superclasse, dessa forma
//é necessário fazer o cast quando formos trabalhar com as classes filhas.