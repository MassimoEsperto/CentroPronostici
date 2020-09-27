import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';


@Component({
  selector: 'app-root',
  animations: [
    slideInAnimation
    // animation triggers go here
  ],
  template: ` <div [@routeAnimations]="prepareRoute(outlet)" >
              <router-outlet #outlet="outlet"></router-outlet></div>`
  
})
export class AppComponent implements OnInit {
 
  constructor(){}

  ngOnInit(){}

  prepareRoute(outlet: RouterOutlet) 
  {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}