"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q04_conta_1 = require("./q04_conta");
const q03_banco_1 = require("./q03_banco");
let bradesco = new q03_banco_1.Banco();
let vitor = new q04_conta_1.Conta("1", 0);
let ricardo = new q04_conta_1.Conta("2", 0);
//Testando alguns métodos das classes Conta e Banco
bradesco.inserir(vitor);
bradesco.inserir(ricardo);
console.log(bradesco.consultar("1"));
console.log(bradesco.qtdDeContas());
console.log(bradesco.mediaSaldo());
console.log(bradesco.dinheiroTotalBanco());
console.log();
bradesco.excluir('1');
console.log(bradesco.consultar("1"));
console.log(bradesco.consultar("2"));
console.log(bradesco.qtdDeContas());
console.log(bradesco.mediaSaldo());
console.log(bradesco.dinheiroTotalBanco());
console.log();
//Testando atributos
let numero = vitor.numero;
let saldo = vitor.saldo;
console.log(numero, saldo);
