import { Component, OnInit } from '@angular/core';
import {TableLoaderService} from '../services/table-loader.service';
import {BlogEntry} from './BlogEntry';
import {AppComponent} from '../app.component';
import {BlogDetailLoaderService} from '../services/blog-detail-loader.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'Welcome to Patrick\'s travel blog';
  displayedColumns: string[] = ['Title', 'Destination', 'Date', 'Length'];
  dataSource: BlogEntry[];
  private app: AppComponent

  constructor(
    private blogLoaderService: TableLoaderService,
    private blogdetailLoader: BlogDetailLoaderService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.displayMock();
  }


  displayMock() {
    this.dataSource = this.blogLoaderService.getBlogMock();
  }

  showClickedBlog(row: any) {
      this.router.navigateByUrl('blogDetail');
      console.log(row);
  }
}
