"use strict";
class Presidente extends Funcionario {
    getBonificacao() {
        return this.salario + 1000;
    }
}
