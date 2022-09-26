function getTratamento(nome: string, pronome: string = "Sr"): string{
    return `${pronome}. ${nome}`;
}


function main(): void{
    console.log(getTratamento("Vitor"))
    console.log(getTratamento("Vitoria", "Sra"))
}

main()