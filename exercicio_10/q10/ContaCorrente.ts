import { Conta } from "./Conta";

export class ContaCorrente extends Conta implements Tributavel{
    public calculaTributos(): number {
        return this.saldo * 0.1;
    }
}