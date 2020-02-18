import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BlogEntryModel} from '../travel-blog/travel-blog-entry/BlogEntryModel';
import {LoginModel} from '../authentication/login/loginModel';
import {BlogHeaderModel} from '../travel-blog/BlogHeaderModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private blogUrlRemote = 'http://localhost:3000/blog/user';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  login(user: LoginModel): Observable<BlogHeaderModel> {
    return this.http.post<BlogHeaderModel>(this.blogUrlRemote + '/login', user, this.httpOptions);
  }

}
