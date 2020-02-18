import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import jsSHA from 'jssha';
import {LoginModel} from './loginModel';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'User Login';
  showError: boolean;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.showError = false;
  }

  login(loginForm: NgForm) {
    const hash = new jsSHA('SHA-256', 'TEXT');
    hash.update(loginForm.value.password);
    const loginUser: LoginModel = {
      username: loginForm.value.username,
      password: hash.getHash('HEX')
    };
    this.authService.login(loginUser).subscribe(data => {
      this.showError = false;
      this.authService.setUser(data);
      this.router.navigate(['/dashboard']);
    }, error => {
      this.showError = true;
    });
  }

}
