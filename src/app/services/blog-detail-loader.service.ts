import { Injectable } from '@angular/core';
import {BlogDetailMock} from '../mocks/BlogDetailMock';
import {BlogHeaderModel} from '../travel-blog/BlogHeaderModel';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailLoaderService {

  private detailBlogMock: BlogDetailMock = new BlogDetailMock();

  constructor(
  ) { }

  getDetailBlogMock(): BlogHeaderModel {
    return this.detailBlogMock.getMockHeader();
  }


}
