import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BlogEntryModel} from '../travel-blog/travel-blog-entry/BlogEntryModel';
import {LoginModel} from '../authentication/login/loginModel';
import {BlogHeaderModel} from '../travel-blog/BlogHeaderModel';
import {UserModel} from '../authentication/login/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private blogUrlRemote = 'http://localhost:3000/blog';
  private user: UserModel = {username: null, role: null, token: null};

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  login(user: LoginModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.blogUrlRemote + '/login', user, this.httpOptions);
  }

  setUser(user: UserModel) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  logout() {
    this.user = {username: null, role: null, token: null};
  }
}
