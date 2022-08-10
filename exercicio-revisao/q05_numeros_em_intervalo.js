/*Escreva um programa que imprima os números inteiros entre dois valores lidos.*/


import prompt from 'prompt-sync'
const input = prompt()

function main(){
    
    const limiteInferior = Number(input('Digite o limite inferior do intervalo: '))
    const limiteSuperior = Number(input('Digite o limite superior do intervalo: '))

    const vetorIntervaloPreenchido = getNumerosDoIntervalo(limiteInferior, limiteSuperior)

    console.log(`\tNúmeros inteiros dentro do intervalo (${limiteInferior}, ${limiteSuperior}) = [${vetorIntervaloPreenchido.join(', ')}]`)

} 

function getNumerosDoIntervalo(limiteInferior, limiteSuperior) {
    const tamanhoVetor = limiteSuperior - limiteInferior - 1
    const vetorIntervalo = new Array(tamanhoVetor)
    let currentIndex = 0

    for (let i = limiteInferior + 1; i < limiteSuperior; i++) {
        vetorIntervalo[currentIndex] = i
        currentIndex++
    }
    return vetorIntervalo
}

main()