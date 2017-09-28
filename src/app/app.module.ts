//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { MyLoginComponentComponent } from './my-login-component/my-login-component.component';
import { CallbackComponent } from "./callBack/callback.component";
import { HomeComponent } from './home-component/home.component';

// Routes
import { ROUTES } from "./app.routes";

//Services
import { AuthService } from "./auth/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    MyLoginComponentComponent,
    CallbackComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
