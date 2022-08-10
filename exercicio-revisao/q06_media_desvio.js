/*Escreva um programa que leia uma sequência de números inteiros terminada por –1 e
imprima na tela a soma e a média aritmética e o desvio padrão destes números. Obs: o
valor –1 é somente um terminador e não deve ser considerado nos cálculos.*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let numero = Number(input('Digite um número: '))

    let qtdNumeros = 0
    let somaTotal = 0
    let vetorNumeros = []

    while(numero !== -1){
        qtdNumeros++
        somaTotal += numero
        vetorNumeros.push(numero)

        numero = Number(input('Digite um número: '))
    }

    const mediaAritmetica = somaTotal/qtdNumeros
    const desvioPadrao = getDesvioPadrao(vetorNumeros, qtdNumeros, mediaAritmetica)

    console.log('Resumo: ')
    console.log(`\tValores: [${vetorNumeros.join(', ')}]\n\tMedia Aritmética: ${mediaAritmetica}\n\tDesvio Padrão: ${desvioPadrao}`)
} 

function getDesvioPadrao(vetor, qtdNumeros, mediaAritmetica) {
    let somatorio = 0

    for (let i = 0; i < vetor.length; i++) {
        somatorio += (vetor[i] - mediaAritmetica) ** 2
    }

    const desvio = Math.sqrt(somatorio/qtdNumeros)
    return desvio.toFixed(2)
}


main()