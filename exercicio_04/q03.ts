/*
Houve erro porque o construtor da classe Radio possui um parametro
e durante sua chamada não foi passado nenhum.

Podemos resolver de duas formas, passando o valor durante sua chamada
ou podemos definir um valor default para o parâmetro dentro do construtor.

*/

class Radio { 
    volume : number; 
    constructor(volume : number=1) { 
    this.volume = volume; 
    } 
   } 
   let r : Radio = new Radio(); 
   r.volume = 10; 
