"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuditoriaInterna_1 = require("./AuditoriaInterna");
const ContaCorrente_1 = require("./ContaCorrente");
const SegurodeVida_1 = require("./SegurodeVida");
class Application {
    main() {
        let conta1 = new ContaCorrente_1.ContaCorrente('Vitor', 200);
        let conta2 = new ContaCorrente_1.ContaCorrente('Ricardo', 300);
        let conta3 = new ContaCorrente_1.ContaCorrente('Altaci', 400);
        let seg1 = new SegurodeVida_1.SegurodeVida();
        let seg2 = new SegurodeVida_1.SegurodeVida();
        let auditoria = new AuditoriaInterna_1.AuditoriaInterna();
        auditoria.adicionar(conta1);
        auditoria.adicionar(conta2);
        auditoria.adicionar(conta3);
        auditoria.adicionar(seg1);
        auditoria.adicionar(seg2);
        console.log(auditoria.calcularTributos());
    }
}
let app = new Application();
app.main();
