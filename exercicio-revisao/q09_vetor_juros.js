/* Escreva uma função que dados 2 valores reais v e t. Onde v é um valor em R$ e t é a
taxa de juros em %. Retorne um array de 12 posições meses representando a taxa
aplicada como juros compostos ao valor v mês a mês.
Ex: v = 1000,00 e t = 1%. Retornar: 1.010 – 1.020,10 - 1.030,30 - ... - 1.126,82*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const reais = Number(input('Digite uma quantidade em real: '))
    const juros = Number(input('Digite uma taxa de juros em porcentagem: '))/100

    const vetor = getSaldos(reais, juros)

    console.log(`Vetor com Saldos: `)
    console.log(vetor.join(' -- '))
} 

function getSaldos(saldo, juros){
    const vetorJuros = []

    for (let i = 0; i < 12; i++) {
        saldo = saldo * (1 + juros)
        vetorJuros.push(saldo.toFixed(2))
    }

    return vetorJuros
}

main()