import { Routes } from '@angular/router';
import { MyLoginComponentComponent } from './my-login-component/my-login-component.component';
import { CallbackComponent } from "./callBack/callback.component";
import { ProfileComponent } from "./profile-component/profile.component";
import { ClassicLoginComponent } from "./classic-login/classic-login.component";
import { HomeComponent } from "./home/home.component";

export const ROUTES: Routes = [
    { path:'', component: HomeComponent },
    { path: 'login', component: MyLoginComponentComponent },
    { path: 'callback', component: CallbackComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'classicLogin', component: ClassicLoginComponent }
];
