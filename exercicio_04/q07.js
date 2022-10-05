"use strict";
class Equipamento {
    constructor(ligado = false) {
        this.ligado = ligado;
    }
    liga() {
        if (!this.estaLigado()) {
            this.ligado = true;
        }
    }
    desliga() {
        if (this.estaLigado()) {
            this.ligado = false;
        }
    }
    inverte() {
        this.ligado = !this.ligado;
    }
    estaLigado() {
        return this.ligado;
    }
}
let equip1 = new Equipamento();
console.log(equip1.ligado);
equip1.liga();
console.log(equip1.ligado);
equip1.desliga();
console.log(equip1.ligado);
equip1.inverte();
console.log(equip1.ligado);
equip1.inverte();
console.log(equip1.ligado);
console.log(equip1.estaLigado());
