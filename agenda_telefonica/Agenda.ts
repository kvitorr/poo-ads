import { Contato } from "./Contato";

import prompt from 'prompt-sync'
const input = prompt()

export class Agenda {
    proprietario: string = '';
    contatos: Array<Contato> = [];
    qtd_max_contatos: number = 0;

    mostrarAgenda(): void{
        console.log(`------------ Agenda do ${this.proprietario} ------------`)
        for (let i = 0; i < this.contatos.length; i++) {
            console.log(`Nome: ${this.contatos[i].nome}`)
            console.log(`Telefone: ${this.contatos[i].telefone}`)
            console.log()
        }
    }

    adicionarNovoContato(): void {
        if(this.contatos.length === this.qtd_max_contatos){
            console.log('Agenda cheia... compre uma nova rs')
        } else {        
            console.log('\nAdicionando novo contato...')
            let tamanho = this.contatos.length

            this.contatos.push(new Contato)
            this.contatos[tamanho].nome = input('Nome: ')
            this.contatos[tamanho].telefone = Number(input('Telefone: '))
        }
    }




}