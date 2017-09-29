import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
    userProfile: any;
    auth0 = new auth0.WebAuth({
        clientID: 'knhdxgLhsFLzWqs3vRf9bC7cIG11FiQ6',
        domain: 'ftoled.auth0.com',
        responseType: 'token id_token',
        audience: 'https://ftoled.auth0.com/userinfo',
        redirectUri: 'http://localhost:4200/callback',      
        scope: 'openid profile'
    });

  constructor(public router: Router) {}

  public login(): void {
      console.log("Processing authorization..");
    this.auth0.authorize();
  }

    public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
        console.log("Processing authorization..");
            if (authResult && authResult.accessToken && authResult.idToken) {
            window.location.hash = '';
            this._getProfile(authResult);
            this.router.navigate(['profile']);
            console.log("You are successfully logged in!");
        } else if (err) {
            this.router.navigate(['/']);
            console.log(err);
        }
        });
    }
    private _getProfile(authResult) {
        this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
            this.setSession(authResult, profile);
        });
    }
  private setSession(authResult, profile): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 50000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('profile', JSON.stringify(profile));
    console.log("Profile: " + profile);
    
  }

    public logout(): void {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        this.router.navigate(['/']);
    }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

    public getProfile(cb): void {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }

        const self = this;
        this.auth0.client.userInfo(accessToken, (err, profile) => {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    }

}