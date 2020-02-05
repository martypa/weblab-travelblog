import { Injectable } from '@angular/core';
import {BlogDetailMock} from '../mocks/BlogDetailMock';
import {BlogHeaderModel} from '../travel-blog/BlogHeaderModel';
import {BlogEntryModel} from '../travel-blog/BlogEntryModel';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailLoaderService {

  private detailBlogMock: BlogDetailMock = new BlogDetailMock();

  constructor(
  ) { }

  getDetailBlogHeaderMock(): BlogHeaderModel {
    return this.detailBlogMock.getMockHeader();
  }

  getDetailBlogEntryMock(): BlogEntryModel {
    return this.detailBlogMock.getMockEntry();
  }


}
