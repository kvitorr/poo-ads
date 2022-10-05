
class Jogador{
    força: number;
    nivel: number;
    pontos: number;

    constructor(força: number = 0, nivel: number = 0, pontos:number = 0){
        this.força = força;
        this.nivel = nivel;
        this.pontos = pontos;
    }

    calcularAtaque(): number{
        return this.força * this.nivel;
    }

    atacar(jogadorAtacado: Jogador): void{
        if(jogadorAtacado.estaVivo()){
            jogadorAtacado.pontos = jogadorAtacado.pontos - this.calcularAtaque()
        }       
    }

    estaVivo(): boolean{
        return this.pontos > 0
    }

    toString():string{
        return `Força: ${this.força}\nNível: ${this.nivel}\nPontos: ${this.pontos}\n`
    }
}


let vitor = new Jogador(1, 2, 3)
let ricardo = new Jogador(3, 4, 5)

console.log("Jogador: Vitor ~~ Status")
console.log(vitor.toString())

console.log("Jogador: Ricardo ~~ Status")
console.log(ricardo.toString())

//console.clear()

console.log("Vitor atacou Ricardo")
vitor.atacar(ricardo)

console.log("Jogador: Ricardo ~~ Status")
console.log(ricardo.toString())


//console.clear()
console.log("Ricardo atacou Vitor")
ricardo.atacar(vitor)

console.log("Jogador: Vitor ~~ Status")
console.log(vitor.toString())

console.log("Jogador: Ricardo ~~ Status")
console.log(ricardo.toString())

if(vitor.pontos < 0){
    console.log("Vitor morreu x.x")
}