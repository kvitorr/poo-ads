import { Tributavel } from "./Tributavel";

export class AuditoriaInterna {
    private _tributaveis: Tributavel[] = [];

    public adicionar(tributavel: Tributavel) {
        this._tributaveis.push(tributavel);
    }

    public calcularTributos(): number {
        let soma = 0;
        for (let i = 0; i < this._tributaveis.length; i++) {
            soma += this._tributaveis[i].calculaTributos();
        }
        return soma;
    }
}