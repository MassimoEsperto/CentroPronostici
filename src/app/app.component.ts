import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  providers: [LoginService]
  
})
export class AppComponent {
  title = 'pronostichiamo';
}
