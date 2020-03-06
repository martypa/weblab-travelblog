import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {BlogEntryDeleteService} from '../../services/blog-entry-delete.service';

@Component({
  selector: 'app-travel-blog-entry',
  templateUrl: './travel-blog-entry.component.html',
  styleUrls: ['./travel-blog-entry.component.scss']
})
export class TravelBlogEntryComponent implements OnInit {

  @Input()
  id: string;
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

  creatorUser;

  constructor(
    private authentication: AuthenticationService,
    private deleteService: BlogEntryDeleteService,
  ) { }

  ngOnInit() {
    if (this.authentication.getUser().role == 'creator') {
      this.creatorUser = true;
    }

  }

  delteUser() {
    this.deleteService.delete(this);
  }

}
