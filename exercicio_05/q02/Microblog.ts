import Postagem from './Postagem'

export default class Microblog{

    postagens: Postagem[];

    adicionarPostagem(postagem: Postagem): void{
        if(!this.existePostagemIgual(postagem.id)){
            this.postagens.push(postagem);
        }
    }

    existePostagemIgual(id: number): boolean{
        for(let i: number = 0; i < this.postagens.length; i++){
            if(id == this.postagens[i].id){
                return true
            }
        }
        return false
    }

    consultarPorId(id: number): number{
        let indice: number = -1;
        for(let i: number = 0; i < this.postagens.length; i++){
            if(id === this.postagens[i].id){
                indice = i;
                break;
            }
        }
        return indice;
    }

    excluirPostagem(id: number): void{
        let indice: number = this.consultarPorId(id)
        if(indice != -1){
            this.postagens.splice(indice, 1);
        }
    }

    postagemMaisCurtida(): Postagem{
        let maior: Postagem = this.postagens[0];
        let qtdCurtidas: number = 0;
        for(let i: number = 0; i < this.postagens.length; i++){
            if(qtdCurtidas < this.postagens[i].quantidadedeCurtidas){
                maior = this.postagens[i]
                qtdCurtidas = this.postagens[i].quantidadedeCurtidas
            }
        }
        return maior;       
    }

    curtirPostagem(id: number): void{
        let indice = this.consultarPorId(id);
        this.postagens[indice].curtir()
    }

    toString(): string{
        let concatenacao: string = '';
        for(let i: number = 0; i < this.postagens.length; i++){
            concatenacao += this.postagens[i].toString() + " "
        }
        return concatenacao
    }
}