export class Competizione {
    id_comp: string;
    sigla: string;
    descrizione: string;
    isAttiva: string;

    constructor(
        id_comp: string,
        sigla: string,
        descrizione: string,
        isAttiva?: string
    ) { 
        this.id_comp=id_comp
        this.sigla=sigla
        this.descrizione=descrizione
        this.isAttiva=isAttiva
    }
}
