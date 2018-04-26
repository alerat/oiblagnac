import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

  userInfo(): string {
    const user = this.authService.getUserProfile();
    return user.nickname;
  }

  picture(): string {
    const user = this.authService.getUserProfile();
    return user.picture;
  }
}
