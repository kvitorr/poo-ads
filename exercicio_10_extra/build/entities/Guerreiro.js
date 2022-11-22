"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
const JaEliminadoException_1 = require("../error/JaEliminadoException");
class Guerreiro {
    constructor(id, descricao, forcaAtaque) {
        this._id = id;
        this._descricao = descricao;
        this._forcaAtaque = forcaAtaque;
        this._life = 10;
    }
    estaEliminado() {
        if (this._life <= 0)
            return true;
        else
            return false;
    }
    defenderAtaque(valorAtaque) {
        this._life -= valorAtaque;
    }
    atacar(defensivel) {
        if (defensivel.estaEliminado()) {
            throw new JaEliminadoException_1.JaEliminadoException("Defensível já eliminado");
        }
        defensivel.defenderAtaque(this._forcaAtaque);
    }
}
exports.Guerreiro = Guerreiro;
