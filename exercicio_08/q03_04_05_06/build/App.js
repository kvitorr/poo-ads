"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = require("./Conta");
let conta1 = new Conta_1.Conta("001", 100);
/*conta1.sacar(101); throw new Error('Saldo insuficiente.');
                     ^
Error: Saldo insuficiente.*/
let conta2 = new Conta_1.Conta("002", 200);
conta1.transferir(conta2, 101);
/*
Em resumo: tentou-se realizar uma transferência da conta1 para a conta 2.
O método transferir, chama o método sacar na conta origem e chama o método
depositar na conta destino. Dessa forma, tentou-se realizar a transferência
de 101 reais, no entando a conta1 só possui 100 reais de saldo. Nesse contexto,
quando o programa tentou sacar 101 reais da conta1, o saldo ficaria negativo e
o programa lançou um erro "Saldo insuficiente".
*/ 
