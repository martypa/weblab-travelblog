import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-travel-blog-entry',
  templateUrl: './travel-blog-entry.component.html',
  styleUrls: ['./travel-blog-entry.component.scss']
})
export class TravelBlogEntryComponent implements OnInit {

  @Input()
  id: any;
  @Input()
  title: string;
  @Input()
  date: string;
  @Input()
  pictureFile: any;
  @Input()
  pictureDiscription: string;
  @Input()
  text: string;
  creatorUser: boolean;

  constructor(
    private authentication: AuthenticationService,
  ) { }

  ngOnInit() {
    if (this.authentication.getUser().role == 'creator') {
      this.creatorUser = true;
    }

  }

  delteUser() {
    console.log('Hallo');
  }

}
