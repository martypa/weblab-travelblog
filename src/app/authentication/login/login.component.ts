import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import jsSHA from 'jssha';
import {LoginModel} from './loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'User Login';

  constructor() { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    console.log(atob('asdf'))
    const hash = new jsSHA('SHA-256', 'TEXT');
    hash.update(loginForm.value.password);
    const loginUser: LoginModel = {
      user: loginForm.value.username,
      password: hash.getHash('HEX')
    };
  }

}
