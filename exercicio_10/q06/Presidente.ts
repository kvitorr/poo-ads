class Presidente extends Funcionario{
    public getBonificacao(): number {
        return this.salario+1000;
    }
}