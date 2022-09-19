

//"strictNullChecks": false   
           
/*
let numero: number= undefined;
console.log(numero) //Nenhum erro
*/

//"strictNullChecks": true   

/*
let numero: number = undefined; //O tipo 'undefined' não pode ser atribuído ao tipo 'number'.
console.log(numero)
*/

//"strictNullChecks": true              

let numero: number | undefined= undefined; //Nenhum erro

console.log(numero)

