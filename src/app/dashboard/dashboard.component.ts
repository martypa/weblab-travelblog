import { Component, OnInit } from '@angular/core';
import {TableLoaderService} from '../services/table-loader.service';
import {BlogTableModel} from './BlogTableModel';
import {AppComponent} from '../app.component';
import {AuthenticationService} from '../services/authentication.service';

;

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
    private authServ: AuthenticationService,
    private app: AppComponent,
  ) {}

  ngOnInit() {
    this.blogTableLoader.getBlogTable().subscribe(data => {
      this.dataSource = data;
      if (this.authServ.getUser().username != null) {
        this.app.username = this.authServ.getUser().username;
        this.app.login = false;
        this.app.logout = true;
        if (this.authServ.getUser().role === 'creator') {
          this.app.createBlogEntry = true;
          this.app.createTravel = true;
        } else {
          this.app.createBlogEntry = false;
          this.app.createTravel = false;
        }
      } else {
        this.app.username = '';
        this.app.login = true;
        this.app.logout = false;
        this.app.createTravel = false;
        this.app.createBlogEntry = false;
      }


    });
  }



}
