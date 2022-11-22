import {Guerreiro} from "../entities/Guerreiro"
import {BaseMilitar} from "../entities/BaseMilitar"
import {CenarioDeBatalha} from "../entities/CenarioDeBatalha"
import { Defensivel } from "../interfaces/Defensivel";

let vitor: Guerreiro = new Guerreiro (1, "atirador", 3);
let ricardo: Guerreiro = new Guerreiro (2, "sniper", 4);

let forte: BaseMilitar = new BaseMilitar(3, 0, 0);
try {

    vitor.atacar(forte);
    vitor.atacar(ricardo);
    vitor.atacar(ricardo);
    vitor.atacar(ricardo);
    vitor.atacar(ricardo);
    //vitor.atacar(ricardo); simulando erro

    //console.log(forte.percentualDano)
    //console.log(ricardo.estaEliminado())
    
    let battle1: CenarioDeBatalha = new CenarioDeBatalha();

    let red: Defensivel[] = [];
    let blue: Defensivel[] = [];

    for (let i = 0; i < 6; i++) {
        red.push(vitor)
        blue.push(ricardo)
    }

    blue.push(forte);
    blue.push(forte);
    red.push(forte);
    red.push(forte);

    for (let i = 0; i < 10; i++) {
        console.log(battle1.avaliar(blue, red))        
    }

} catch (e:any){
    console.log(e.message)
}
