class Saudacao{
    texto: string;
    destinatario: string;

    constructor(texto: string, destinatario: string){
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao(){
        return `${this.texto}, ${this.destinatario}.`
    }
}

let saudacao1 = new Saudacao("Bom dia", "Vitor")

console.log(saudacao1.obterSaudacao())