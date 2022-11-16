import { Conta } from "./Conta";
import { Tributavel } from "./Tributavel";

export class ContaCorrente extends Conta implements Tributavel{
    public calculaTributos(): number {
        return this.saldo * 0.1;
    }
}