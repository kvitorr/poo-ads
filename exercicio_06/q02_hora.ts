class Hora{
    constructor(private _hora: number, 
                private _minutos: number, 
                private _segundos: number){}

        public get hora(): number{
            return this._hora;
        }

        public get minutos(): number{
            return this._minutos;
        }

        public get segundos(){
            return this._segundos;
        }

        public toString(): string {
            
            let hora: string = `${this._hora}`
            let minutos: string = `${this._minutos}`
            let segundos: string = `${this._segundos}`

            if(this._hora < 10){
                hora = `0${this._hora}`
            }

            if(this._minutos < 10){
                minutos = `0${this._minutos}`
            }

            if(this._segundos < 10){
                segundos = `0${this._segundos}`
            } 
            return `${hora}:${minutos}:${segundos}`;
        }
}


let hora1: Hora = new Hora(15, 24, 36);

console.log(hora1.hora) //15
console.log(hora1.minutos) //24
console.log(hora1.segundos) //36
console.log(hora1.toString()) //15:24:36

