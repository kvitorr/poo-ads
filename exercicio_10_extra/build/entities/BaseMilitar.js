"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMilitar = void 0;
class BaseMilitar {
    constructor(id, x, y) {
        this._id = id;
        this._x = x;
        this._y = y;
        this._percentualDano = 0;
    }
    estaEliminado() {
        if (this._percentualDano >= 90)
            return true;
        else
            return false;
    }
    defenderAtaque(valorAtaque) {
        this._percentualDano += valorAtaque;
    }
    get percentualDano() {
        return this._percentualDano;
    }
}
exports.BaseMilitar = BaseMilitar;
