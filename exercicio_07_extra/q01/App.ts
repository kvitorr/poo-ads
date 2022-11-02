import Diarista from "./Diarista";
import Empregado from "./Empregado";
import Horista from "./Horista";


let vitor: Horista = new Horista(10000);

console.log(vitor.calcularSalario().toFixed(3));

console.log()

/*
Nessa questão, não é necessário a criação de um novo construtor
para as subclasses Diarista e Horista, aparentemente, elas herdam
o construtor da classe pai.
*/