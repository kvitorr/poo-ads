"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Diarista_1 = __importDefault(require("./Diarista"));
class Horista extends Diarista_1.default {
    //@Override
    calcularSalario() {
        return super.calcularSalario() / 24;
    }
}
exports.default = Horista;
