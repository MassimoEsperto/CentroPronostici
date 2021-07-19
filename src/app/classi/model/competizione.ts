export class Competizione {
    id_comp: string;
    sigla: string;
    descrizione: string;
    isAttiva: string;
    footer: string;
    scadenza: string;
    isOpen: string;

    constructor(
        id_comp: string,
        sigla: string,
        descrizione: string,
        isAttiva?: string,
        footer?: string,
        scadenza?: string,
        isOpen?: string,
    ) { 
        this.id_comp=id_comp
        this.sigla=sigla
        this.descrizione=descrizione
        this.isAttiva=isAttiva
        this.footer=footer
        this.scadenza=scadenza
        this.isOpen=isOpen
    }
}
