"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Quadrado_1 = require("./Quadrado");
const Retangulo_1 = require("./Retangulo");
const Triangulo_1 = require("./Triangulo");
class Application {
    main() {
        let triangulo = new Triangulo_1.Triangulo(1, 2, 3, 4);
        let triangulo2 = new Triangulo_1.Triangulo(2, 1, 2, 1);
        console.log("Triangulo: ");
        console.log(triangulo.area());
        console.log(triangulo2.area());
        console.log(triangulo.comparar(triangulo2));
        console.log("");
        console.log("Quadrado: ");
        let quadrado = new Quadrado_1.Quadrado(2, 2);
        let quadrado2 = new Quadrado_1.Quadrado(1, 1);
        console.log(quadrado.area());
        console.log(quadrado2.area());
        console.log(quadrado.comparar(quadrado2));
        console.log("");
        console.log("Retangulo: ");
        let retangulo = new Retangulo_1.Retangulo(3, 2);
        let retangulo2 = new Retangulo_1.Retangulo(2, 1);
        console.log(retangulo.area());
        console.log(retangulo2.area());
        console.log(retangulo.comparar(retangulo2));
    }
}
let app = new Application();
app.main();
