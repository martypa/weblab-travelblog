import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BlogEntryModel} from '../travel-blog/travel-blog-entry/BlogEntryModel';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogSaveService {

  private blogUrlRemote = 'http://localhost:3000/blog/upload/BlogEntry';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  saveBlogEntry(entry: BlogEntryModel): Observable<BlogEntryModel> {
    return this.http.post<BlogEntryModel>(this.blogUrlRemote, entry, this.httpOptions);
  }

}
