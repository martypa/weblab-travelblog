import { Injectable } from '@angular/core';
import {BlogDetailMock} from '../mocks/BlogDetailMock';
import {BlogHeaderModel} from '../travel-blog/BlogHeaderModel';
import {BlogEntryModel} from '../travel-blog/travel-blog-entry/BlogEntryModel';
import {HttpClient} from '@angular/common/http';
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

  getBlogHeader(id: number): Observable<BlogHeaderModel> {
    return this.http.get<BlogHeaderModel>(this.blogUrlRemote + '/header/' + id);
  }

  getBlogEntries(id: number): Observable<BlogEntryModel[]> {
    return this.http.get<BlogEntryModel[]>(this.blogUrlRemote + '/entries/' + id);
  }






}
