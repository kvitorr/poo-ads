function ehPar(numero: number) {
    return (numero % 2) == 0;
}

function main(): void{
    console.log(ehPar(-2))
    console.log(ehPar(-1))
    console.log(ehPar(0))
    console.log(ehPar(1))
    console.log(ehPar(2))
    console.log(ehPar(3))
    console.log(ehPar(4))
}

main()




