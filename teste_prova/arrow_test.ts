

let a: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var b: number[] = [];
/*
a.forEach(function(x: number){
    if(x%2 == 0){
        b.push(x)
    }
})

console.log(a)
console.log(b)

let c = a.filter((numero) => {
    return numero%2 === 0
})
console.log(c)

const d = a.map((numero) => {
    return numero*2
})

console.log(d)
*/


let c: number[] = []
a.forEach(elemento =>{
    c.push(elemento *2)
})

console.log(c)


