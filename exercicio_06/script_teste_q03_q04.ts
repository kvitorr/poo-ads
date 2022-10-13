import { Conta } from "./q04_conta";
import { Banco} from "./q03_banco";

let bradesco: Banco = new Banco();

let vitor: Conta = new Conta("1", 0);
let ricardo: Conta = new Conta("2", 0)


//Testando alguns métodos das classes Conta e Banco
bradesco.inserir(vitor)
bradesco.inserir(ricardo)

console.log(bradesco.consultar("1"))
console.log(bradesco.qtdDeContas())
console.log(bradesco.mediaSaldo())
console.log(bradesco.dinheiroTotalBanco())
console.log()

bradesco.excluir('1')

console.log(bradesco.consultar("1"))
console.log(bradesco.consultar("2"))
console.log(bradesco.qtdDeContas())
console.log(bradesco.mediaSaldo())
console.log(bradesco.dinheiroTotalBanco())
console.log()

//Testando atributos
let numero = vitor.numero
let saldo = vitor.saldo

console.log(numero, saldo) //funcionou, acesso através dos métodos get.