import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginHomeComponent } from './login/login-home/login-home.component';
import { LoginRegisterComponent } from './login/login-register/login-register.component';
import { LoginSignInComponent } from './login/login-sign-in/login-sign-in.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
