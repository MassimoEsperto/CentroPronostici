import { SUCCESS } from './costanti';

export class Generale {

    error = '';
    success = '';

    successo() {
        this.success = SUCCESS;
        //  this.loading=false;
        setTimeout(() => {
            this.success = '';
        }, 5000);
    }

    resetErrors() {
        this.success = '';
        this.error = '';
    }
}