import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BlogHeaderModel} from '../travel-blog/BlogHeaderModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelSaveService {

  private blogUrlRemote = 'http://localhost:3000/blog/upload/createTravel';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  saveTravel(travel: BlogHeaderModel): Observable<BlogHeaderModel> {
    return this.http.post<BlogHeaderModel>(this.blogUrlRemote, travel, this.httpOptions);
  }

}
