class Triangulo{
    a: number
    b: number
    c: number

    constructor(a: number, b: number, c: number){
        this.a = a
        this.b = b
        this.c = c
    }

    ehTriangulo(): boolean{
        return (Math.abs(this.b - this.c) < this.a && this.a < this.b + this.c
            || Math.abs(this.c - this.a) < this.b && this.b < this.c + this.a
            || Math.abs(this.b - this.a) < this.c && this.c < this.b + this.a
            )
    }
    
    ehIsoceles():boolean{
        console.log("AA")

        if(this.ehTriangulo() && !this.ehIsoceles()){
            console.log("AA")
            return this.a == this.b || this.b == this.c || this.c == this.a
        } else return false
    }
    
    ehEquilatero():boolean{
        if(this.ehTriangulo()){
            return this.a == this.b && this.a == this.c
        } else return false
    }
    
    ehEscaleno():boolean{
        if(this.ehTriangulo()){
            return this.a != this.b && this.a != this.c && this.b != this.c
        } else return false
    }
}

let isoceles: Triangulo = new Triangulo(7, 4, 7)
let escaleno: Triangulo = new Triangulo(3, 2, 4)
let equilatero: Triangulo = new Triangulo(6, 6, 6)
let naoEhTriangulo: Triangulo = new Triangulo(9, 5, 10)


console.log(isoceles.ehIsoceles())
console.log(equilatero.ehEquilatero())
console.log(escaleno.ehEscaleno())
console.log(naoEhTriangulo.ehTriangulo())