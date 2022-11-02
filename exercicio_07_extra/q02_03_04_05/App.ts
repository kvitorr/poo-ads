import Funcionario from "./Funcionario";
import Pessoa from "./Pessoa";
import Professor from "./Professor";

let vito: Pessoa = new Professor("Vitor", "Araujo", "001", 5000, "Mestre");

console.log(vito.nomeCompleto());

console.log((<Professor> vito).titulacao)
console.log((<Professor> vito).matricula)
console.log((<Funcionario> vito).calcularSalarioSegundaParcela())
console.log((<Professor> vito).calcularSalarioPrimeiraParcela())

//Sempre vai chamar a função da classe que foi instanciada
//Ex: se eu crio um professor, não é possivel utilizar a função
//calcularSalarioSegundaParcela() da classe super, mesmo se 
//der cast; dúvida...

