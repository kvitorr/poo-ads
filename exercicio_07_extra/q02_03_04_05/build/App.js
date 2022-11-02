"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Professor_1 = __importDefault(require("./Professor"));
let vito = new Professor_1.default("Vitor", "Araujo", "001", 5000, "Mestre");
console.log(vito.nomeCompleto());
console.log(vito.titulacao);
console.log(vito.matricula);
console.log(vito.calcularSalarioSegundaParcela());
console.log(vito.calcularSalarioPrimeiraParcela());
//Sempre vai chamar a função da classe que foi instanciada
//Ex: se eu crio um professor, não é possivel utilizar a função
//calcularSalarioSegundaParcela() da classe super, mesmo se 
//der cast; dúvida...
