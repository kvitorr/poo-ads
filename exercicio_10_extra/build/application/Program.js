"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Guerreiro_1 = require("../entities/Guerreiro");
const BaseMilitar_1 = require("../entities/BaseMilitar");
const CenarioDeBatalha_1 = require("../entities/CenarioDeBatalha");
let vitor = new Guerreiro_1.Guerreiro(1, "atirador", 3);
let ricardo = new Guerreiro_1.Guerreiro(2, "sniper", 4);
let forte = new BaseMilitar_1.BaseMilitar(3, 0, 0);
try {
    vitor.atacar(forte);
    vitor.atacar(ricardo);
    vitor.atacar(ricardo);
    vitor.atacar(ricardo);
    vitor.atacar(ricardo);
    //vitor.atacar(ricardo); simulando erro
    //console.log(forte.percentualDano)
    //console.log(ricardo.estaEliminado())
    let battle1 = new CenarioDeBatalha_1.CenarioDeBatalha();
    let red = [];
    let blue = [];
    for (let i = 0; i < 6; i++) {
        red.push(vitor);
        blue.push(ricardo);
    }
    blue.push(forte);
    blue.push(forte);
    red.push(forte);
    red.push(forte);
    for (let i = 0; i < 10; i++) {
        console.log(battle1.avaliar(blue, red));
    }
}
catch (e) {
    console.log(e.message);
}
