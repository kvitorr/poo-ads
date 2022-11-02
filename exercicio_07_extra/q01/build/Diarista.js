"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Empregado_1 = __importDefault(require("./Empregado"));
class Diarista extends Empregado_1.default {
    //@Override
    calcularSalario() {
        return super.calcularSalario() / 30;
    }
}
exports.default = Diarista;
