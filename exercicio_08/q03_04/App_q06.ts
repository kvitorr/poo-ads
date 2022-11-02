import { Banco } from "./Banco";
import { Conta } from "./Conta";

let bradesco: Banco = new Banco();
let conta1: Conta = new Conta("001", 100);
let conta2: Conta = new Conta("002", 200);

bradesco.inserir(conta1);
bradesco.inserir(conta2);

bradesco.transferir(conta1.numero, conta2.numero, 100);

console.log(conta1);
console.log(conta2);


//let conta3: Conta = new Conta("003", -51);
//conta1.depositar(-5);
//conta1.sacar(-6);