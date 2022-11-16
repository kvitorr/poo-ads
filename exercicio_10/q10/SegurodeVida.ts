import { Tributavel } from "./Tributavel";

export class SegurodeVida implements Tributavel {
    public calculaTributos(): number {
        return 50.00;
    }
}