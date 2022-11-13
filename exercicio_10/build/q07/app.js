"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Quadrado_1 = require("./Quadrado");
const Retangulo_1 = require("./Retangulo");
const Triangulo_1 = require("./Triangulo");
class Application {
    main() {
        let triangulo = new Triangulo_1.Triangulo(1, 2, 3, 4);
        let quadrado = new Quadrado_1.Quadrado(2, 1);
        let retangulo = new Retangulo_1.Retangulo(2, 3);
        console.log(triangulo.area());
        console.log(triangulo.perimetro());
        console.log(quadrado.area());
        console.log(quadrado.perimetro());
        console.log(retangulo.area());
        console.log(retangulo.perimetro());
    }
}
let app = new Application();
app.main();
