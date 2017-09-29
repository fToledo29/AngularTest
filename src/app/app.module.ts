//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

//Components
import { MyLoginComponentComponent } from './my-login-component/my-login-component.component';
import { CallbackComponent } from "./callBack/callback.component";
import { ProfileComponent } from './profile-component/profile.component';
import { HomeComponent } from './home/home.component';
import { ClassicLoginComponent } from './classic-login/classic-login.component';

// Routes
import { ROUTES } from "./app.routes";

//Services
import { AuthService } from "./auth/auth.service";


@NgModule({
  declarations: [
    HomeComponent,
    MyLoginComponentComponent,
    CallbackComponent,
    ProfileComponent,
    HomeComponent,
    ClassicLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
