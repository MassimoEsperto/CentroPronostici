import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { StudentModule } from './home/student.module';
import { AppComponent } from './app.component';
import { LoginHomeComponent } from './login/login-home/login-home.component';
import { LoginSignInComponent } from './login/login-sign-in/login-sign-in.component';
import { LoginRegisterComponent } from './login/login-register/login-register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginHomeComponent,
    LoginSignInComponent,
    LoginRegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
