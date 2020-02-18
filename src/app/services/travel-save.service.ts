import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BlogHeaderModel} from '../travel-blog/BlogHeaderModel';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TravelSaveService {

  private blogUrlRemote = 'http://localhost:3000/blog/upload/createTravel';

  constructor(
    private http: HttpClient,
    private authServ: AuthenticationService,
  ) { }

  saveTravel(travel: BlogHeaderModel): Observable<BlogHeaderModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authServ.getUser().token
    });
    return this.http.post<BlogHeaderModel>(this.blogUrlRemote, travel, {headers});
  }

}
