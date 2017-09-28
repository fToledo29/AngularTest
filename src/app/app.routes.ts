import { Routes } from '@angular/router';
import { MyLoginComponentComponent } from './my-login-component/my-login-component.component';
import { CallbackComponent } from "./callBack/callback.component";
import { HomeComponent } from "./home-component/home.component";

export const ROUTES: Routes = [
  { path: 'login', component: MyLoginComponentComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'home', component: HomeComponent }
];
