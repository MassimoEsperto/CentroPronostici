import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }
  
  ngOnInit() {
    alert(localStorage.getItem('user'));
  }
  ngAfterViewInit()
  {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#00b050';
  }

}
