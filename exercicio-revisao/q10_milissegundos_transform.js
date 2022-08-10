/*Faça uma função que recebe por parâmetro uma medida de tempo expressa em
milissegundos e retorna esse tempo dias, horas, minutos e segundos no formato: “Dias
hh:mm:ss”.*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const milissegundos = Number(input('Milissegundos: '))

    getData(milissegundos)
    
} 

//1 dia = 24 horas = 1440 minutos =  86400 segundos = 86400000 milissegundos
//1 hora = 60 minutos = 3600 segundos = 3600000 milissegundos
// 1 minuto = 60 segundos = 60000 milissegundos
// 1 segundo = 1000 milissegundos


function getData(milissegundos){

    let dias = Math.trunc(milissegundos/86400000)
    milissegundos = milissegundos - dias * 86400000

    let horas = Math.trunc(milissegundos/3600000)
    milissegundos = milissegundos - horas * 3600000

    let minutos = Math.trunc(milissegundos/60000)
    milissegundos = milissegundos - minutos * 60000

    let segundos = Math.trunc(milissegundos/1000)

    dias = corrigirDia(dias)
    horas = corrigirData(horas)
    minutos = corrigirData(minutos)
    segundos = corrigirData(segundos)

    console.log(`\t${dias} ${horas}:${minutos}:${segundos}`)
}


function corrigirData(number) {
    if(number < 10 && number >= 0) return "0" + number
    else return number
}


function corrigirDia(number) {
    if(number === 1) return "1 dia"
    else return `${number} dias`
}


main()