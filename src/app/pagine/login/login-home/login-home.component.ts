import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { SFONDO_HOME } from 'src/app/classi/utils/costanti';


@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {}
  
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = SFONDO_HOME
  }


}
