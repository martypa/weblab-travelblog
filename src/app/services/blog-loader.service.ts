import { Injectable } from '@angular/core';
import {BlogTableMock} from '../Mocks/BlogTableMock';
import {BlogEntry} from '../dashboard/BlogEntry';

@Injectable({
  providedIn: 'root'
})
export class BlogLoaderService {

  private blogMock: BlogTableMock = new BlogTableMock();

  constructor() { }

  getBlogMock(): BlogEntry[] {
    return this.blogMock.getMock();
  }

}
