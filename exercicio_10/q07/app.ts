import { Quadrado } from "./Quadrado";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";

class Application {
    public main(){

        let triangulo: Triangulo = new Triangulo(1, 2, 3, 4);
        let quadrado: Quadrado = new Quadrado(2, 1);
        let retangulo: Retangulo = new Retangulo(2, 3);

        console.log(triangulo.area())
        console.log(triangulo.perimetro())
        console.log(quadrado.area())
        console.log(quadrado.perimetro())
        console.log(retangulo.area())
        console.log(retangulo.perimetro())
    }
}

let app: Application = new Application();

app.main();