"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditoriaInterna = void 0;
class AuditoriaInterna {
    constructor() {
        this.tributaveis = [];
    }
    adicionar(tributavel) {
        this.tributaveis.push(tributavel);
    }
    calcularTributos() {
        let soma = 0;
        for (let i = 0; i < this.tributaveis.length; i++) {
            soma += this.tributaveis[i].calculaTributos();
        }
        return soma;
    }
}
exports.AuditoriaInterna = AuditoriaInterna;
