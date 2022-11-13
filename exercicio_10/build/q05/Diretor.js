"use strict";
class Diretor extends Gerente {
    getBonificacao() {
        return this.salario * 0.6;
    }
}
