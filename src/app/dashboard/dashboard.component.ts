import { Component, OnInit } from '@angular/core';
import {TableLoaderService} from '../services/table-loader.service';
import {BlogTableModel} from './BlogTableModel';
import {AppComponent} from '../app.component';
import {BlogDetailLoaderService} from '../services/blog-detail-loader.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  displayedColumns: string[] = ['Title', 'Destination', 'Date'];
  dataSource: BlogTableModel[] = [];

  constructor(
    private blogTableLoader: TableLoaderService,
  ) {}

  ngOnInit() {
    this.blogTableLoader.getBlogTable().subscribe(data => {
      this.dataSource = data;
    });
  }
}
