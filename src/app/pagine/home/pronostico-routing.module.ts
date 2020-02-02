import { SideBarComponent } from './side-bar/side-bar.component';
import { GestioneComponent } from './gestione/gestione.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { VisualizzaComponent } from './visualizza/visualizza.component';
import { AuthGuard } from 'src/app/classi/auth-guard';


const routes: Routes = [
    {
        path: 'home',
        component: SideBarComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'gestione',
                component: GestioneComponent
            },
            {
                path: 'inserimento',
                component: InserimentoComponent
            },
            {
                path: 'visualizza',
                component: VisualizzaComponent
            }
           
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PronosticoRoutingModule { }
