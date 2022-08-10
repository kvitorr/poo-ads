/* Escreva um programa para converter de real para bitcoin e exibir para o usuário a
resposta final. Considere até 8 casas decimais*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const [number1, number2, number3] = input('Digite 3 números separados por vírgula: ').split(' ').map(Number)

    const [maior, intermediario, menor] = ordenaValores(number1, number2, number3)

    console.log(`Maior valor: ${maior}\nMenor valor: ${menor}`)

} 

function ordenaValores(n1, n2, n3){
    if(n1 > n2) {

        if(n2 > n3) return [n1, n2, n3]
        else if (n3 > n1) return [n3, n1, n2]
        else return [n1, n3, n2]

    } else {

        if(n3 > n2) return [n3, n2, n1]
        else if (n2 > n3) return [n2, n1, n3]
        else [n2, n3, n1]
    }
}

main()