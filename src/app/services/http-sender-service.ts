import { HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { throwError } from 'rxjs'
import { WS_BASE_URL } from '../classi/utils/costanti'
import { Ruolo } from '../classi/utils/enums'

export class HttpSenderService {

  myheaders = { headers: new HttpHeaders().set('Comp', this.getCompetizione()) }


  buildURL(operation: string = ""): string {

    let URL: string = WS_BASE_URL

    URL = URL + "/" + operation + ".php"

    return URL

  }

  username() {
    return JSON.parse(localStorage.getItem("tk-user")).username
  }

  ruolo() {
    return JSON.parse(localStorage.getItem("tk-user")).ruolo
  }

  isadmin() {
    let ruolo = this.ruolo();
    if (ruolo == Ruolo.ADMIN) {
      return true
    }
    else {
      return false
    }
  }

  isPlayer() {
    let ruolo = this.ruolo();
    if (ruolo == Ruolo.ADMIN || ruolo == Ruolo.GIOCATORE) {
      return true
    }
    else {
      return false
    }
  }

  setCompetizione(comp: string) {
    localStorage.setItem('comp-now', comp);
  }

  getCompetizione() {
    let comp = localStorage.getItem("comp-now")
    return comp
  }

  assegnaCompetizione(){
    let comp = localStorage.getItem("comp-now")
    if(!comp){
      localStorage.setItem('comp-now', '1');
    }
  }



  handleError(error: HttpErrorResponse) {
    console.log("error:", error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}