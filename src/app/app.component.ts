import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'weblab-travelblog';
  username: string;
  login: boolean;
  createTravel: boolean;
  createBlogEntry: boolean;
  logout: boolean;

  constructor(
    private authServ: AuthenticationService,
    private router: Router,
  ) {
  }


  setTitle(title: string) {
    this.title = title;
  }

  logOut() {
    this.authServ.logout();
    this.router.navigate(['/login']);
  }
}
