import {Injectable} from '@angular/core';
import {Auth0DecodedHash, Auth0UserProfile, WebAuth} from 'auth0-js';
import {environment} from '../../../environments/environment';


@Injectable()
export class AuthService {

  private loggedIn = false;
  private auth0: WebAuth;
  private userProfile: Auth0UserProfile;

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

  private fillUserInfo(idTokenPayload: Auth0UserProfile): void {
    this.userProfile = idTokenPayload;
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
    this.auth0.parseHash((err, authResult: Auth0DecodedHash) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        AuthService.setSession(authResult);
        this.fillUserInfo(authResult.idTokenPayload);
        this.loggedIn = true;
      } else if (err) {
        console.log(err);
      }
    });
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public getUserProfile(): Auth0UserProfile {
    return this.userProfile;
  }
}

