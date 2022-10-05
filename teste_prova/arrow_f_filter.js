"use strict";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const array_par = array.filter(x => x % 2 == 0);
/*
console.log(array_par)


const ola = () => console.log("Olá");

ola();
*/
array_par.forEach(x => String(x));
console.log(array_par);
