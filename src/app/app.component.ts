import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from './authentication/login/login.component';
import {LoginModel} from './authentication/login/loginModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'weblab-travelblog';

  constructor(
  ) {
  }

  setTitle(title: string) {
    this.title = title;
  }

}
