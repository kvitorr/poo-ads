"use strict";
class Triangulo {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    ehTriangulo() {
        return (Math.abs(this.b - this.c) < this.a && this.a < this.b + this.c
            || Math.abs(this.c - this.a) < this.b && this.b < this.c + this.a
            || Math.abs(this.b - this.a) < this.c && this.c < this.b + this.a);
    }
    ehIsoceles() {
        console.log("AA");
        if (this.ehTriangulo() && !this.ehIsoceles()) {
            console.log("AA");
            return this.a == this.b || this.b == this.c || this.c == this.a;
        }
        else
            return false;
    }
    ehEquilatero() {
        if (this.ehTriangulo()) {
            return this.a == this.b && this.a == this.c;
        }
        else
            return false;
    }
    ehEscaleno() {
        if (this.ehTriangulo()) {
            return this.a != this.b && this.a != this.c && this.b != this.c;
        }
        else
            return false;
    }
}
let isoceles = new Triangulo(7, 4, 7);
let escaleno = new Triangulo(3, 2, 4);
let equilatero = new Triangulo(6, 6, 6);
let naoEhTriangulo = new Triangulo(9, 5, 10);
console.log(isoceles.ehIsoceles());
console.log(equilatero.ehEquilatero());
console.log(escaleno.ehEscaleno());
console.log(naoEhTriangulo.ehTriangulo());
