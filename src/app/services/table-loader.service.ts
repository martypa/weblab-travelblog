import { Injectable } from '@angular/core';
import {BlogTableMock} from '../mocks/BlogTableMock';
import {BlogTableModel} from '../dashboard/BlogTableModel';
import {BlogHeaderModel} from '../travel-blog/BlogHeaderModel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableLoaderService {

  private blogMock: BlogTableMock = new BlogTableMock();
  private tableUrlLocal = '../../assets/blogTable.json';
  private tableUrlRemote = 'http://localhost:3000/blog/';

  constructor(
    private http: HttpClient,
  ) { }

  private getBlogMock(): BlogTableModel[] {
    return this.blogMock.getMock();
  }

  getBlogTable(): Observable<BlogTableModel[]> {
    return this.http.get<BlogTableModel[]>(this.tableUrlRemote);
  }

}
