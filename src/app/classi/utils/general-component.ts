import { SUCCESS } from './costanti';

export class Generale {

    error = '';
    success = '';
    loading: boolean = true;

    successo() {
        this.success = SUCCESS;

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
    }

    getRuoloStrng(rol) {
        switch (rol) {
            case "1": {
                return "ADMIN"
                break;
            }
            case "2": {
                return "PLAYER";
                break;
            }
            case "3": {
                return "VISITATORE";
                break;
            }
            default: {
                return "VISITATORE";
                break;
            }
        }
    }
}