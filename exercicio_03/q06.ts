
function exibir(palavra: string, ...palavras: string[]):string{
    return palavra + " " + palavras.join(' ');
}


function main(): void{


    console.log(exibir("a"))
    console.log(exibir("a", "b"))
    console.log(exibir("a", "b", "c"))
    console.log(exibir("a", "b", "c", "d"))


} main()