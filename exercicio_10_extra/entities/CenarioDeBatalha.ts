import { Utils } from "../utils/Utils";
import { Defensivel } from "../interfaces/Defensivel";
import { Guerreiro } from "./Guerreiro";
import { BaseMilitar } from "./BaseMilitar";


export class CenarioDeBatalha {

    public avaliar(exercitoAzul: Defensivel[], exercitoVermelho: Defensivel[]): string{
        let redPoints: number = 0;
        let bluePoints: number = 0;
        let defensivel: Defensivel;
        let vetorVitoria: number[] = [];

        for (let i = 0; i < exercitoAzul.length; i++) {
            defensivel = exercitoAzul[i];

            if(defensivel instanceof Guerreiro){
                bluePoints += 2;
            } 

            if(defensivel instanceof BaseMilitar){
                bluePoints += 5;
            }
        }

        for (let i = 0; i < exercitoVermelho.length; i++) {
            defensivel = exercitoVermelho[i];

            if(defensivel instanceof Guerreiro){
                redPoints += 2;
            } 

            if(defensivel instanceof BaseMilitar){
                redPoints += 5;
            }
        }

        let porcentagemDeVitoria = Math.max(bluePoints, redPoints)/Math.min(bluePoints, redPoints)*100 - Math.min(bluePoints, redPoints)/Math.max(bluePoints, redPoints)*100;
        porcentagemDeVitoria = porcentagemDeVitoria/2;

        //console.log(porcentagemDeVitoria)

        if(bluePoints == redPoints) {

            for (let i = 0; i < 50; i++) {
                vetorVitoria.push(0); 
                vetorVitoria.push(1);                       
            }    

        } else {

            for (let i = 0; i < Math.ceil(porcentagemDeVitoria); i++) {
                vetorVitoria.push(0);            
            }
    
            for (let i = 0; i < 100 - Math.ceil(porcentagemDeVitoria); i++) {
                vetorVitoria.push(1);            
            }

        }

        let indice = Utils.getRandomIntInclusive(0, 99);

        if(Math.max(bluePoints, redPoints) == redPoints){

            if(vetorVitoria[indice] == 0){
                return ("Vitória do exército vermelho.")
            } else {
                return ("Vitória do exército azul.")
            }

        } else {

            if(vetorVitoria[indice] == 1){
                return ("Vitória do exército azul.")
            } else {
                return ("Vitória do exército vermelho.")
            }
        }
    }
}