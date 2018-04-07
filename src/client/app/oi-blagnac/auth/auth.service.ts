import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {WebAuth} from 'auth0-js';
import {environment} from '../../../environments/environment';


@Injectable()
export class AuthService {

  private loggedIn = false;
  private auth0: WebAuth;

  constructor() {
    this.auth0 = new WebAuth(environment.auth0Config.login);
  }

  private static setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public login(): void {
    if (!this.loggedIn) {
      this.auth0.authorize();
    }
  }

  public logout(): void {
    this.loggedIn = false;
    this.auth0.logout(environment.auth0Config.logout);
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        AuthService.setSession(authResult);
        this.loggedIn = true;
      } else if (err) {
        console.log(err);
      }
    });
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }


}

