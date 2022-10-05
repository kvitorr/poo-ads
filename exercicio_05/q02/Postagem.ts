export default class Postagem {

    id: number;
    texto: string;
    quantidadedeCurtidas: number;

    constructor (id: number, texto: string, quantidadedeCurtidas: number){
        this.id = id;
        this.texto = texto;
        this.quantidadedeCurtidas = quantidadedeCurtidas;
    }

    curtir(): void{
        this.quantidadedeCurtidas++
    }

    toString(): string{
        return `Legenda: ${this.texto} + Curtidas: ${this.quantidadedeCurtidas}\n`
    }
}