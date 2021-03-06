//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { CallbackComponent } from "./callBack/callback.component";
import { ProfileComponent } from './profile-component/profile.component';
import { HomeComponent } from './home/home.component';
import { ClassicLoginComponent } from './classic-login/classic-login.component';
import { LoginComponent } from './login/login.component';

// Routes
import { ROUTES } from "./app.routes";

//Services
import { AuthService } from "./auth/auth.service";


@NgModule({
  declarations: [
    HomeComponent,
    CallbackComponent,
    ProfileComponent,
    HomeComponent,
    ClassicLoginComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
