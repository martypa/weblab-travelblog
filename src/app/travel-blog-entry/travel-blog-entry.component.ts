import {Component, Input, OnInit} from '@angular/core';
import {BlogEntryModel} from './BlogEntryModel';

@Component({
  selector: 'app-travel-blog-entry',
  templateUrl: './travel-blog-entry.component.html',
  styleUrls: ['./travel-blog-entry.component.scss']
})
export class TravelBlogEntryComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  date: string;
  @Input()
  pictureFile: string;
  @Input()
  pictureDiscription: string;
  @Input()
  text: string;

  constructor() { }

  ngOnInit() {
  }

}
