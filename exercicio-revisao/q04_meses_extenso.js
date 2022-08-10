/*Escreva um programa que apresente o mês por extenso, a partir de um número
digitado pelo usuário (entre 1 e 12) e a quantidade de dias do mês.*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const number = Number(input('Digite um número de 1 a 12: '))

    const monthUnabbreviated = getUnabbreviatedMonth(number)
    const monthDays = getMonthDays(number)

    console.log(`\t${monthUnabbreviated}, com ${monthDays}`)
}

function getUnabbreviatedMonth(number) {
    const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    const realIndex = number - 1

    return month[realIndex]
}

function getMonthDays(number) {
    if(number === 2) { 
        return "28 ou 29 dias (nos anos bissextos)"

    } else if (number === 4 || number === 6 || number === 9 || number === 11) {
        return "30 dias"

    } else return "31 dias"
}


main()