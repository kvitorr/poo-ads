
//RPG

class Personagem {
    nome: string = '';
    classe: string = '';
    hp: number = 0;
    mana: number = 0;
    ataque: number = 0;
    resistencia: number = 0;
    habilidade: number = 0;
    inteligencia: number = 0;

    estudar(): number{
        return this.inteligencia += 2;
    }

    estudarMagia(): number{
        return this.habilidade++;
    }

    treinarCorpo(): number {
        return this.ataque++, this.resistencia++;
    }

    usarPocaoHp(): number{
        return this.hp += 50;
    }

    usarPocaoMana(): number{
        return this.mana += 50;
    }

    atacar(){}
    fugir(){}
    caminhar(){}
    correr(){}
    defender(){}
    usarHabilidade(){}
}


class Npc {
    nome: String = '';

    falar(){}
    entregarMissao(){}
}


class Mapas{
    nome: String = '';
    localizacao: String = '';
    nivel: number = 0;

    invocarMonstros(){}
    modificarMapa(){}
}


class Usuario{
    login: String = '';
    senha: String = '';
    nickname: String = '';
    nivel: number = 0;


    logar(){}
    adicionarAmigo(){}
    comprarItens(){}
    conversarChat(){}
    selecionarPersonagem(){}
    selecionarModoDeJogo(){}
    selecionarMapa(){}
    deslogar(){}
}