import { SUCCESS } from './costanti';

export class Generale {

    error = '';
    success = '';
    loading: boolean = true;

    successo() {
        this.success = SUCCESS;
        this.loading = false;
        setTimeout(() => {
            this.resetErrors();
        }, 5000);
    }

    resetErrors() {
        this.success = '';
        this.error = '';
    }

    stampaErrore(errore) {
        this.error = errore
        this.loading = false;
    }

    vediErrore(errore) {
        this.error = errore
        this.loading = false;
        setTimeout(() => {
            this.resetErrors();
        }, 3000);
    }
}