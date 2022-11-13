class Diretor extends Gerente {
    public getBonificacao(): number {
        return this.salario * 0.6;
    }
}