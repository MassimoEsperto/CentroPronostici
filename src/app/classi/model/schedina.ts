export class Schedina {
    id_schedina:number;
    id_partita:number;
    partita:string;
    tipo:number;
    risultato:string;
    username:string;
    punteggio:number
   
      constructor(
        id_schedina:number,
        id_partita:number,
        partita:string,
        tipo:number,
        risultato:string,
        username:string,
        punteggio?:number
        ) {}
    }
    