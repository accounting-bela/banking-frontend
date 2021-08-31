import { Component } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {GeolocationService} from '@ng-web-apis/geolocation';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened = false;

  pages = [
    {icon: 'request_page', name: 'Računi', route: 'racuni'},
    {icon: 'insert_drive_file', name: 'Moji računi', route: 'moji-racuni'},
    {icon: 'find_in_page', name: 'Stranke', route: 'stranke'},
    {icon: 'contact_page', name: 'Moje stranke', route: 'moje-stranke'},
    {icon: 'collections_bookmark', name: 'Certifikati', route: 'certifikati'}
  ];
  isLogin = false;

  constructor(private router: Router, private auth: AuthService) {
    this.auth.isAuthenticated$.subscribe(res => {
      if(!res)
      {
        this.auth.loginWithRedirect();
      }
    });
  }

  openDrawer(): void {
    this.opened = !this.opened;
  }

  toPage(route: string): void {
    this.router.navigate([route]);
  }

  logout(): void {
    this.auth.logout();
  }
}
