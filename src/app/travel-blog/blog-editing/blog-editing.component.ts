import { Component, OnInit } from '@angular/core';
import {BlogTableModel} from '../../dashboard/BlogTableModel';
import {TableLoaderService} from '../../services/table-loader.service';
import {BlogEntryModel} from '../travel-blog-entry/BlogEntryModel';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-blog-editing',
  templateUrl: './blog-editing.component.html',
  styleUrls: ['./blog-editing.component.scss']
})
export class BlogEditingComponent implements OnInit {

  title: string;
  blogs: BlogTableModel[] = [];

  constructor(
    private blogTableLoader: TableLoaderService,
  ) { }

  ngOnInit() {
    this.title = 'Create Blog Entry';
    this.blogTableLoader.getBlogTable().subscribe(data => {
      this.blogs = data;
    });
  }

  createEntry(form: NgForm) {

  }

}
