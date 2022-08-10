/*Escreva um programa que possua uma variável com um número ponto flutuante 
e mostre seu antecessor e sucessor, ambos inteiros.*/

import prompt from 'prompt-sync'
const input = prompt()

function main() {

    const numero =  Number(input('Digite um número: '))
    let antecessor, sucessor

    if(isInteger(numero)){
        antecessor = numero - 1
        sucessor = numero + 1
    } else {
        antecessor = Math.floor(numero)
        sucessor = Math.ceil(numero)
    }

    console.log(`Número: ${numero}\nAntecessor: ${antecessor}\nSucessor: ${sucessor}`)
}

function isInteger(numero) {
    const integerPart = Math.trunc(numero)
    const decimalPart = numero - integerPart

    if(decimalPart === 0) {
        return true
    } else {
        return false
    }
}

main()