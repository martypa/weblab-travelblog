import { Injectable } from '@angular/core';
import {TravelBlogComponent} from '../travel-blog/travel-blog.component';
import {BlogEntryModel} from '../travel-blog/travel-blog-entry/BlogEntryModel';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BlogEntryDeleteService {

  public deleteBlog: any;
  public observerBlogDelete: BehaviorSubject<any>;
  private blogUrlRemote = 'http://localhost:3000/blog/delete/';

  constructor(
    private http: HttpClient,
    private authServ: AuthenticationService
  ) {
    this.observerBlogDelete = new BehaviorSubject(this.deleteBlog);
  }

  delete(param: any) {
    this.observerBlogDelete.next(param);
  }

  removeRemote(blogid: string, collecID: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authServ.getUser().token,
    });
    const url = this.blogUrlRemote + collecID + '/' + blogid;
    return this.http.delete<string>(url, {headers});
  }

}
