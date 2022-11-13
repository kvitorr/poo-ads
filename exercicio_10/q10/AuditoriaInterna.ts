export class AuditoriaInterna {
    tributaveis: Tributavel[] = [];

    public adicionar(tributavel: Tributavel) {
        this.tributaveis.push(tributavel);
    }

    public calcularTributos(): number {
        let soma = 0;
        for (let i = 0; i < this.tributaveis.length; i++) {
            soma += this.tributaveis[i].calculaTributos();
        }
        return soma;
    }
}