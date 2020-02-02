import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginHomeComponent } from './pagine/login/login-home/login-home.component';
import { LoginRegisterComponent } from './pagine/login/login-register/login-register.component';
import { LoginSignInComponent } from './pagine/login/login-sign-in/login-sign-in.component';

const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/login', 
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginHomeComponent
    },
    {
        path: 'sign-in',
        component: LoginSignInComponent
    },
    {
        path: 'register',
        component: LoginRegisterComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
