
function formataArray(array: number[]): string{
    let formatacao = ''

    array.forEach(function(num: number, index: number): void{
        if(index != (array.length-1)) formatacao += `${num}-`
        else formatacao += `${num}`
    })

    return formatacao;
}



function main(){
    const numeros: number[] = [5, 666, 2, 24, 62]
    
    console.log(formataArray(numeros))
} 
main()