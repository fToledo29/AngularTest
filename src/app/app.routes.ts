import { Routes } from '@angular/router';
import { CallbackComponent } from "./callBack/callback.component";
import { ProfileComponent } from "./profile-component/profile.component";
import { ClassicLoginComponent } from "./classic-login/classic-login.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

export const ROUTES: Routes = [
    { path:'', component: LoginComponent },
    { path: 'callback', component: CallbackComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'classicLogin', component: ClassicLoginComponent }
];
