



function nomeCompleto(nome: string, sobrenome ?: string):string{

    if(sobrenome){
        return nome + " " + sobrenome;
    }
    return nome;
}

console.log(nomeCompleto("Vitor"))

console.log(nomeCompleto("Vitor", "Araujo"))