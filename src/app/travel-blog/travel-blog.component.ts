import { Component, OnInit } from '@angular/core';
import {BlogDetailLoaderService} from '../services/blog-detail-loader.service';
import {BlogHeaderModel} from './BlogHeaderModel';
import {BlogEntryModel} from './BlogEntryModel';

@Component({
  selector: 'app-travel-blog',
  templateUrl: './travel-blog.component.html',
  styleUrls: ['./travel-blog.component.scss']
})
export class TravelBlogComponent implements OnInit {

  constructor(private blogLoader: BlogDetailLoaderService) { }

  public headermodel: BlogHeaderModel;
  public blogEntrymodel: BlogEntryModel;

  ngOnInit() {
    this.headermodel = this.blogLoader.getDetailBlogHeaderMock();
    this.blogEntrymodel = this.blogLoader.getDetailBlogEntryMock();
  }

}
