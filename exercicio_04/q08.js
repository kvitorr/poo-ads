"use strict";
class Conta {
    constructor(numero, saldo = 0) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor) {
        if (this.saldo < valor) {
            return false;
        }
        else {
            this.saldo = this.saldo - valor;
            return true;
        }
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        else {
            return false;
        }
    }
}
let c1 = new Conta("1");
let c2 = new Conta("2");
console.log(c1.saldo); //0
console.log(c2.saldo); //0
console.log(c1.sacar(10)); //false
console.log(c2.sacar(10)); //false
console.log(c1.transferir(c2, 10)); //false
c1.depositar(50);
console.log(c1.saldo); //50
console.log(c1.transferir(c2, 50)); //true
