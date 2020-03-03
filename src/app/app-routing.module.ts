import { RecuperaPasswordComponent } from './pagine/login/recupera-password/recupera-password.component';
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
        component: LoginHomeComponent,
        data: {animation: 'AboutPage'}
    },
    {
        path: 'sign-in',
        component: LoginSignInComponent,
        data: {animation: 'FilterPage'}
    },
    {
        path: 'register',
        component: LoginRegisterComponent,
        data: {animation: 'HomePage'}
    },
    {
        path: 'recupera-password',
        component: RecuperaPasswordComponent,
        data: {animation: 'HomePage'}
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
