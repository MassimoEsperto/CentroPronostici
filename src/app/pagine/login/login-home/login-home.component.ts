import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['../../../../assets/css/styles_login.css']
})
export class LoginHomeComponent implements AfterViewInit {
  constructor(private router: Router,private elementRef: ElementRef,private service: AuthService) { }
  ngOnInit() {
    this.service.logout();
  }
  ngAfterViewInit()
  {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1B98CE';
  }
 

}