"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Horista_1 = __importDefault(require("./Horista"));
let vitor = new Horista_1.default(10000);
console.log(vitor.calcularSalario().toFixed(3));
console.log();
/*
Nessa questão, não é necessário a criação de um novo construtor
para as subclasses Diarista e Horista, aparentemente, elas herdam
o construtor da classe pai.
*/ 
