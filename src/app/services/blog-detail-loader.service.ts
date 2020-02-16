import { Injectable } from '@angular/core';
import {BlogDetailMock} from '../mocks/BlogDetailMock';
import {BlogHeaderModel} from '../travel-blog/BlogHeaderModel';
import {BlogEntryModel} from '../travel-blog/travel-blog-entry/BlogEntryModel';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailLoaderService {

  private detailBlogMock: BlogDetailMock = new BlogDetailMock();
  private blogUrlLocal = '../../assets/blogs';
  private blogUrlRemote = 'http://localhost:3000/blog';

  constructor(
    private http: HttpClient,
  ) { }

  private getDetailBlogHeaderMock(): BlogHeaderModel {
    return this.detailBlogMock.getMockHeader();
  }

  private getDetailBlogEntryMock(): BlogEntryModel[] {
    return this.detailBlogMock.getMockEntry();
  }

  getBlogHeader(id: string): Observable<BlogHeaderModel> {
    return this.http.get<BlogHeaderModel>(this.blogUrlRemote + '/header/' + id);
  }

  getBlogEntries(id: string): Observable<BlogEntryModel[]> {
    return this.http.get<BlogEntryModel[]>(this.blogUrlRemote + '/entries/' + id);
  }

  getBlogImage(picName: string): any {
    return this.http.get<Blob>(this.blogUrlRemote + '/picture/' + picName,
      {responseType: 'blob' as 'json'});
  }


}
