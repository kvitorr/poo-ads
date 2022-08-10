/* Escreva um programa para converter de real para bitcoin e exibir para o usuário a
resposta final. Considere até 8 casas decimais*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const real = Number(input('Quantos reais voce quer converter para bitcoin? '))
    const bitcoin = realToBitcoin(real)

    console.log(`${real} real (is) equivalem a ${bitcoin} bitcoin (s)`)
} 

const realToBitcoin = real => real * 0.00000852
main()