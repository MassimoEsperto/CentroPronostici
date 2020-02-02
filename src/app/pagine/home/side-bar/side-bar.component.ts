import { User } from 'src/app/classi/model/user';
import { Component, OnInit } from '@angular/core';
import { InserimentoService } from 'src/app/services/inserimento.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
  username:string;
  isAdmin:boolean;
  
  constructor(private service: InserimentoService) { }

   ngOnInit() {
    this.isAdmin=this.service.isadmin();
    this.username=this.service.username();
   }
  
 
 }
