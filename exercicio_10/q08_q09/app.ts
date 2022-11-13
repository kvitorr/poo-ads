import { Quadrado } from "./Quadrado";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";

class Application {
    public main(){
        let triangulo: Triangulo = new Triangulo(1, 2, 3, 4);
        let triangulo2: Triangulo = new Triangulo(2, 1, 2, 1);
        
        console.log("Triangulo: ")
        console.log(triangulo.area())
        console.log(triangulo2.area())

        console.log(triangulo.comparar(triangulo2))
        console.log("")

        console.log("Quadrado: ")

        let quadrado: Quadrado = new Quadrado(2, 2);
        let quadrado2: Quadrado = new Quadrado(1, 1);

        console.log(quadrado.area())
        console.log(quadrado2.area())

        console.log(quadrado.comparar(quadrado2))
        console.log("")

        console.log("Retangulo: ")

        let retangulo: Retangulo = new Retangulo(3, 2);
        let retangulo2: Retangulo = new Retangulo(2, 1);

        console.log(retangulo.area())
        console.log(retangulo2.area())

        console.log(retangulo.comparar(retangulo2))
    }
}

let app: Application = new Application();

app.main();