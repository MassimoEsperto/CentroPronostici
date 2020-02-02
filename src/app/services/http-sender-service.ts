import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs'
import { WS_BASE_URL } from '../classi/utils/costanti'

export class HttpSenderService {

  
 buildURL(operation: string = ""): string {
 
    let URL: string = WS_BASE_URL
    
    URL = URL + "/" + operation +".php"

    return URL

  }

  username(){
    return JSON.parse(localStorage.getItem("tk-user")).username
  }

  ruolo(){
    return JSON.parse(localStorage.getItem("tk-user")).ruolo
  }

  isadmin(){
    let ruolo= JSON.parse(localStorage.getItem("tk-user")).ruolo
    if(ruolo==1){
      return true
    }
    else
    {
      return false
    }
  }
    


   handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}