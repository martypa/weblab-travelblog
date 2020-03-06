import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BlogEntryModel} from '../travel-blog/travel-blog-entry/BlogEntryModel';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BlogSaveService {

  private blogUrlRemote = 'http://localhost:3000/blog/upload/BlogEntry';

  constructor(
    private http: HttpClient,
    private authServ: AuthenticationService,
  ) { }

  saveBlogEntry(entry: BlogEntryModel): Observable<BlogEntryModel> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authServ.getUser().token
    });
    return this.http.post<BlogEntryModel>(this.blogUrlRemote, entry, {headers});
  }


}
