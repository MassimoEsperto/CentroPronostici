import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { PronosticoModule } from './pagine/home/pronostico.module';
import { AppComponent } from './app.component';
import { LoginHomeComponent } from './pagine/login/login-home/login-home.component';
import { LoginSignInComponent } from './pagine/login/login-sign-in/login-sign-in.component';
import { LoginRegisterComponent } from './pagine/login/login-register/login-register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecuperaPasswordComponent } from './pagine/login/recupera-password/recupera-password.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginHomeComponent,
    LoginSignInComponent,
    LoginRegisterComponent,
    RecuperaPasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PronosticoModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
