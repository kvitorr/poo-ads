"use strict";
class Hora {
    constructor(_hora, _minutos, _segundos) {
        this._hora = _hora;
        this._minutos = _minutos;
        this._segundos = _segundos;
    }
    get hora() {
        return this._hora;
    }
    get minutos() {
        return this._minutos;
    }
    get segundos() {
        return this._segundos;
    }
    toString() {
        let hora = `${this._hora}`;
        let minutos = `${this._minutos}`;
        let segundos = `${this._segundos}`;
        if (this._hora < 10) {
            hora = `0${this._hora}`;
        }
        if (this._minutos < 10) {
            minutos = `0${this._minutos}`;
        }
        if (this._segundos < 10) {
            segundos = `0${this._segundos}`;
        }
        return `${hora}:${minutos}:${segundos}`;
    }
}
let hora1 = new Hora(15, 24, 36);
console.log(hora1.hora);
console.log(hora1.minutos);
console.log(hora1.segundos);
console.log(hora1.toString());
