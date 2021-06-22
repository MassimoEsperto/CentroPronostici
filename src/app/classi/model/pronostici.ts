export class Pronostici {
    id_utente:string;
    id_schedina:number;
    tempo:Date; 
    punteggio:number;  
    indice:number; 
      constructor(
        id_utente:string,
        id_schedina:number,
        tempo:Date,
        punteggio?:number
        ) {}
    }
    
