"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenarioDeBatalha = void 0;
const Utils_1 = require("../utils/Utils");
const Guerreiro_1 = require("./Guerreiro");
const BaseMilitar_1 = require("./BaseMilitar");
class CenarioDeBatalha {
    avaliar(exercitoAzul, exercitoVermelho) {
        let redPoints = 0;
        let bluePoints = 0;
        let defensivel;
        let vetorVitoria = [];
        for (let i = 0; i < exercitoAzul.length; i++) {
            defensivel = exercitoAzul[i];
            if (defensivel instanceof Guerreiro_1.Guerreiro) {
                bluePoints += 2;
            }
            if (defensivel instanceof BaseMilitar_1.BaseMilitar) {
                bluePoints += 5;
            }
        }
        for (let i = 0; i < exercitoVermelho.length; i++) {
            defensivel = exercitoVermelho[i];
            if (defensivel instanceof Guerreiro_1.Guerreiro) {
                redPoints += 2;
            }
            if (defensivel instanceof BaseMilitar_1.BaseMilitar) {
                redPoints += 5;
            }
        }
        let porcentagemDeVitoria = Math.max(bluePoints, redPoints) / Math.min(bluePoints, redPoints) * 100 - Math.min(bluePoints, redPoints) / Math.max(bluePoints, redPoints) * 100;
        porcentagemDeVitoria = porcentagemDeVitoria / 2;
        //console.log(porcentagemDeVitoria)
        if (bluePoints == redPoints) {
            for (let i = 0; i < 50; i++) {
                vetorVitoria.push(0);
                vetorVitoria.push(1);
            }
        }
        else {
            for (let i = 0; i < Math.ceil(porcentagemDeVitoria); i++) {
                vetorVitoria.push(0);
            }
            for (let i = 0; i < 100 - Math.ceil(porcentagemDeVitoria); i++) {
                vetorVitoria.push(1);
            }
        }
        let indice = Utils_1.Utils.getRandomIntInclusive(0, 99);
        if (Math.max(bluePoints, redPoints) == redPoints) {
            if (vetorVitoria[indice] == 0) {
                return ("Vitória do exército vermelho.");
            }
            else {
                return ("Vitória do exército azul.");
            }
        }
        else {
            if (vetorVitoria[indice] == 1) {
                return ("Vitória do exército azul.");
            }
            else {
                return ("Vitória do exército vermelho.");
            }
        }
    }
}
exports.CenarioDeBatalha = CenarioDeBatalha;
