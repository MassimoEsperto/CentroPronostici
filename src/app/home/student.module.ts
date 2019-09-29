import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent, Test1Component, Test2Component],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
