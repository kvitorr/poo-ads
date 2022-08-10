/*Escreva um programa que leia um texto pelo teclado e remova todas as suas vogais acentuadas por não acentuadas. Exiba a string resultante. */
import prompt from 'prompt-sync'
const input = prompt()

import fs, { readFileSync } from 'fs'
const lines = readFileSync('./input.txt', 'utf-8')

function main(){

    const text = lines
    const vetorTexto = text.split('')
    
    const vetorModificado = getVogaisSemAcento(vetorTexto)

    console.log('Frase modificada:')
    console.log(`${vetorModificado.join('')}`)
} 


function getVogaisSemAcento(vetor){
    for (let i = 0; i < vetor.length; i++) {
        if(ehVogalAcentuada(vetor[i].charCodeAt())){
            vetor[i] = changeVogal(vetor[i].charCodeAt())
        }
    }
    return vetor
}


function ehVogalAcentuada(code){   
    return code >= 192 && code <= 252
}


function changeVogal(code) {
    if(code >= 192 && code <= 197) return "A" 
    else if (code >= 200 && code <= 203) return "E"
    else if (code >= 204 && code <= 207) return "I"
    else if (code >= 210 && code <= 214) return "O"
    else if (code >= 217 && code <= 220) return "U"
    else if (code >= 224 && code <= 229) return "a"
    else if (code >= 232 && code <= 235) return "e"
    else if (code >= 236 && code <= 239) return "i"
    else if (code >= 242 && code <= 246) return "o"
    else if (code >= 249 && code <= 252) return "u"
    else return String.fromCharCode(code)
}


main()