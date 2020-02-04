import { Component, OnInit } from '@angular/core';
import {BlogLoaderService} from '../services/blog-loader.service';
import {BlogEntry} from './BlogEntry';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Destination', 'Date', 'Length'];
  dataSource: BlogEntry[];

  constructor(
    private blogLoaderService: BlogLoaderService,
  ) {}

  ngOnInit() {
    this.displayMock();
  }


  displayMock() {
    this.dataSource = this.blogLoaderService.getBlogMock();
  }

  showClickedBlog(row: any) {
      console.log(row);
  }
}
