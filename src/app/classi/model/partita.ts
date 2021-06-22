export class Partita {
    partita: string;
    girone: string;
    data: string;
    id_evento: string;

    constructor(
        partita: string,
        girone: string,
        data: string,
        id_evento?: string
    ) { 
        this.partita=partita
        this.girone=girone
        this.data=data
        this.id_evento=id_evento
    }
}
