import { Banco } from "./Banco";
import { Conta } from "./Conta";

let bradesco: Banco = new Banco();
let conta1: Conta = new Conta("001", 100);
let conta2: Conta = new Conta("002", 200);

bradesco.inserir(conta1);
bradesco.inserir(conta2);

bradesco.transferir(conta1.numero, conta2.numero, 200);

/*
O lançamento de exceção foi propagado. O método transferir da classe
banco, chama, internamente, o método transferir da classe Conta. O
método transferir da classe Conta, como vimos anteriormente, chama
o método sacar da classe Conta que por sua vez, analisa se o valor 
que será sacado deixará o saldo positivo ou negativo. Se negativo,
é lançada uma exceção. Tal exceção é vista quando tentandos realizar
a transferência pedida na questão.

A confiabilidade dessa implementação é alta, já que o lançamento da 
exceção está sendo feita diretamente na fonte do problema, dessa forma
diminuimos a complexidade do nosso código e facilitamos a manutenção
do mesmo. 
*/

