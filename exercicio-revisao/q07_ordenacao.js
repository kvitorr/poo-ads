/*Escreva um programa que leia um vetor de inteiros de 5 posições e apresente-o na tela
de forma crescente e decrescente.*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const vetor = getVetorPreenchido(5)

    const ordemCrescente = vetor.sort(function(a, b) {
        return a - b;
    })

    const ordemDecrescente = inverteVetor(ordemCrescente)

    console.log(`Vetor: [${vetor.join(', ')}]`)
    console.log(`Ordem Crescente: [${ordemCrescente.join(', ')}]`)
    console.log(`Ordem Decrescente: [${ordemDecrescente.join(', ')}]`)
} 

function getVetorPreenchido(numero){
    const vetor = new Array(numero)

    for (let i = 0; i < numero; i++) {
        vetor[i] = Number(input(`vetor[i] = `))
    }
    return vetor
}

function inverteVetor(vetor){
    const vetor2 = new Array(vetor.lenght)
    let contador = 0

    for (let i = vetor.length - 1; i >= 0; i--) {
        vetor2[contador] = vetor[i]
        contador++
    }
    return vetor2
}

main()