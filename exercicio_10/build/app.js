"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Triangulo_1 = require("./Triangulo");
let a = new Triangulo_1.Triangulo(3, 5, 4, 2);
console.log(a.area().toString() + " " + a.perimetro().toString());
//console.log(a);
