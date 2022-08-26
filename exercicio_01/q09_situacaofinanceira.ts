//Criando classe SituacaoFinanceira, seus atributos e métodos
class SituacaoFinanceira {
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    saldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }
}

//Instanciando um objeto e inicializando atributos
let vitorSituation = new SituacaoFinanceira;
vitorSituation.valorCreditos = 666;
vitorSituation.valorDebitos = 1200;

//Exibindo resultado
console.log('---------------------------------->')
console.log(`Saldo: R$ ${vitorSituation.saldo()}`);