

class Conta{
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number = 0){
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean{
        if(this.saldo < valor){
            return false;
        } else {
            this.saldo = this.saldo - valor;
            return true;
        }
    }

    depositar(valor: number): void{
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean{
        if(this.sacar(valor)){
            contaDestino.depositar(valor);
            return true;
        } else {
            return false;
        }
    }
}


class Banco {

    contas: Conta[] = [];
    saldo: number;

    inserir(c: Conta): boolean{    
        let contaAtual = c;
        if(this.consultarIndice(contaAtual.numero) == -1){
            this.contas.push(contaAtual);
            return true;
        } else {
            return false
        }
    }

    consultar(numero: string): Conta{
        let contaProcurada!: Conta;
        for(let i =0; i < this.contas.length; i++){
            if(this.contas[i].numero == numero){
                contaProcurada = this.contas[i];
                break;
            }
        }
        return contaProcurada;
    }

    consultarIndice(numero: string): number {
        let indice: number = -1;
        for(let i: number = 0; i < this.contas.length; i++){
            if(this.contas[i].numero == numero){
                indice = i;
                break
            }
        }
        return indice;
    }

    alterar(c: Conta): boolean {
        let indice = this.consultarIndice(c.numero);
        if(indice != -1){
            this.contas[indice] = c;
            return true;
        }
        return false;
    }

    excluir (numero: string): void {
        let indice: number = this.consultarIndice(numero);

        if(indice != -1){
            for(let i: number = indice; i < this.contas.length; i++){
                this.contas[i] = this.contas[i+1];
            }
            this.contas.pop();
        }
    }

    depositar(numero: string, valor: number){
        let conta: Conta = this.consultar(numero);

        if(conta != null) {
            conta.depositar(valor);
        }
    }

    sacar(numero: string, valor: number): boolean{
        for (let i: number = 0; i < this.contas.length; i++) {
            if(this.contas[i].numero == numero){
                return (this.contas[i].sacar(valor));
            }
        }
        return false
    }
    

    transferir(numeroCredito: string, numeroDebito: string, valor: number): boolean{
        let indiceDebito: number = this.consultarIndice(numeroCredito)
        let indiceCredito: number = this.consultarIndice(numeroDebito)

        let contaCreditada: Conta = this.contas[indiceCredito]
        let contaDebitada: Conta = this.contas[indiceDebito]

        if(indiceDebito != -1 && indiceCredito != -1){
            return contaDebitada.transferir(contaCreditada, valor)
        } else {
            return false
        }
    }

    qtdDeContas(): number{
        return this.contas.length;
    }

    dinheiroTotalBanco(): number{
        const qtdDeContas: number = this.qtdDeContas()
        let saldoTotal = 0;
        for(let i: number = 0; i < qtdDeContas; i++){
            saldoTotal += this.contas[i].saldo;
        }

        return saldoTotal
    }


    mediaSaldo(): number {
        return ((this.dinheiroTotalBanco())/(this.qtdDeContas()))
    }
}