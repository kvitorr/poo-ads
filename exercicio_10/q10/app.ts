import { AuditoriaInterna } from "./AuditoriaInterna";
import { ContaCorrente } from "./ContaCorrente";
import { SegurodeVida } from "./SegurodeVida";

class Application {
    public main(){
        let conta1: ContaCorrente = new ContaCorrente('Vitor', 200);
        let conta2: ContaCorrente = new ContaCorrente('Ricardo', 300);
        let conta3: ContaCorrente = new ContaCorrente('Altaci', 400);

        let seg1: SegurodeVida = new SegurodeVida();
        let seg2: SegurodeVida = new SegurodeVida();

        let auditoria: AuditoriaInterna = new AuditoriaInterna();

        auditoria.adicionar(conta1);
        auditoria.adicionar(conta2);
        auditoria.adicionar(conta3);
        auditoria.adicionar(seg1);
        auditoria.adicionar(seg2);

        console.log(auditoria.calcularTributos());
    }
}

let app: Application = new Application();

app.main();