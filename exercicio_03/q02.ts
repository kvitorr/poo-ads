


function ehDivisivel(numero1: number, numero2:number):boolean{
    return ((numero1%numero2) == 0)
}

function ehPrimo(numero: number): boolean {
    for (let i = 2; i < numero; i++) {
        if(ehDivisivel(numero, i)){
            return false
        }
    }
    return true
}

function main(): void{

    console.log(ehPrimo(2))
    console.log(ehPrimo(3))
    console.log(ehPrimo(4))
    console.log(ehPrimo(5))
    console.log(ehPrimo(6))
    console.log(ehPrimo(7))
    
}

main()