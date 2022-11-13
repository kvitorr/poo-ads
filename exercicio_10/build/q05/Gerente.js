"use strict";
class Gerente extends Funcionario {
    getBonificacao() {
        return this.salario * 0.4;
    }
}
