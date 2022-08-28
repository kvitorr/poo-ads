import { Agenda } from "./Agenda";
import prompt from 'prompt-sync'
const input = prompt()

let agendaVitor = new Agenda
agendaVitor.proprietario = 'Vitor'
agendaVitor.qtd_max_contatos = 20

let option = 0

while(option !== 9){
    
    console.clear()
    console.log('----- Menu_Agenda -----')
    console.log('1. Mostrar contatos')
    console.log('2. Adicionar novo contato')
    console.log('9. Fechar agenda\n')

    option = Number(input('Selecione uma opção: '))

    if(option === 1){
        agendaVitor.mostrarAgenda()
    } else if (option === 2){
        agendaVitor.adicionarNovoContato()
    } else if (option === 9){
        console.clear()
        console.log('agenda fechada...')
    }
    input('Press enter to continue...')
}