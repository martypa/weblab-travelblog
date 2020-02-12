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
  private loginData: LoginModel = {user: '', password: ''};


  constructor(
    public dialog: MatDialog,
  ) {
  }

  setTitle(title: string) {
    this.title = title;
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
      data: {password : this.loginData.password, user: this.loginData.user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.loginData.user = result.user;
      this.loginData.password = result.password;
    });
  }
}
