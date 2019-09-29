import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['../../../assets/css/styles_login.css']
})
export class LoginHomeComponent implements AfterViewInit {
  constructor(private router: Router,private elementRef: ElementRef) { }

  ngAfterViewInit()
  {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1B98CE';
  }
  gotoLink() {
    this.router.navigate(['/dashboard']);
  }

}
