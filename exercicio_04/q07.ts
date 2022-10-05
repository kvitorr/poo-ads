

class Equipamento{

    ligado: boolean;

    constructor(ligado: boolean = false){
        this.ligado = ligado;
    }

    liga(): void{
        if(!this.estaLigado()){
            this.ligado = true;
        }
    }

    desliga(): void{
        if(this.estaLigado()){
            this.ligado = false;
        }
    }

    inverte(): void{
        this.ligado = !this.ligado;
    }

    estaLigado(): boolean{
        return this.ligado;
    }
}


let equip1 = new Equipamento();
console.log(equip1.ligado)

equip1.liga()
console.log(equip1.ligado)

equip1.desliga()
console.log(equip1.ligado)

equip1.inverte()
console.log(equip1.ligado)

equip1.inverte()
console.log(equip1.ligado)

console.log(equip1.estaLigado())
