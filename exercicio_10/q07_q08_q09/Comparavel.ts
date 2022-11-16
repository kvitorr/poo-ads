import { FiguraGeometrica } from "./FiguraGeometrica";

export interface Comparavel{
    comparar(forma: FiguraGeometrica): number;
}