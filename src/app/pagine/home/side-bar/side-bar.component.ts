import { User } from 'src/app/classi/model/user';
import { Component, OnInit } from '@angular/core';
import { GestionePronosticiService } from 'src/app/services/gestione-pronostici.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
  username:string;
  isAdmin:boolean;
  isPlayer:boolean;
  loading:boolean=true;
  
  constructor(private service: GestionePronosticiService) { }

   ngOnInit() {
    this.isAdmin=this.service.isadmin();
    this.username=this.service.username();
    this.isPlayer=this.service.isPlayer();
   }
 
 }
