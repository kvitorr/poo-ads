export interface Defensivel {
    estaEliminado(): boolean;
    defenderAtaque(valorAtaque: number): void;
}