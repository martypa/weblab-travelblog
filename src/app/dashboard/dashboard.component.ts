import { Component, OnInit } from '@angular/core';
import {TableLoaderService} from '../services/table-loader.service';
import {BlogEntry} from './BlogEntry';
import {AppComponent} from '../app.component';


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
