//energia, vida, ataque, defesa, nome

import prompt from "prompt-sync"
let input = prompt;

class Personagem {
    //Construtor: método utilizado para ditar como um objeto é inicializado.
    //Criando um construtor; definir como os atributos serão inicializados.
    //Especificar valores que são obrigatórios na construção de um objeto, dentro dos parenteses.
    //Podemos definir os atributos dentro do constructor, utilizando public [nome atributo]:[variable type]
    constructor(public nome: string,
        public energia: number, 
        public vida: number,
        public ataque:number,
        public defesa: number       
        ){}
}

// Criando um objeto
let saotome : Personagem = new Personagem('Saotome Mary', 50, 30, 77, 100)
console.log(saotome)


