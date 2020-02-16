import { Component, OnInit } from '@angular/core';
import {BlogTableModel} from '../../dashboard/BlogTableModel';
import {TableLoaderService} from '../../services/table-loader.service';
import {BlogEntryModel} from '../travel-blog-entry/BlogEntryModel';
import {NgForm} from '@angular/forms';
import {BlogSaveService} from '../../services/blog-save.service';
import {FileUploader} from 'ng2-file-upload';
import {Router} from '@angular/router';



@Component({
  selector: 'app-blog-editing',
  templateUrl: './blog-editing.component.html',
  styleUrls: ['./blog-editing.component.scss'],
})
export class BlogEditingComponent implements OnInit {

  title: string;
  blogs: BlogTableModel[] = [];
  form: NgForm;

  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/blog/upload/Picture',
    itemAlias: 'image'
  });

  constructor(
    private blogTableLoader: TableLoaderService,
    private blogSaver: BlogSaveService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.title = 'Create Blog Entry';
    this.blogTableLoader.getBlogTable().subscribe(data => {
      this.blogs = data;
    });
    this.initUploader();
  }

  createEntry(form: NgForm) {
    this.uploader.uploadAll();
    this.form = form;
  }

  private initUploader() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      const response = JSON.parse(status);
      this.uploadBlogEntry(response.filename, this.form);
    };
  }

  private uploadBlogEntry(picName: string, form: NgForm) {
    const entry: BlogEntryModel = {
      _id: null,
      type: 'entry',
      picFile: picName,
      picutre: null,
      date: form.value.blogDate,
      title: form.value.blogTitle,
      picDiscription: form.value.blogDate + '_' + form.value.blogTitle,
      text: form.value.blogText,
      blog: form.value.selectedBlog,
    };
    this.blogSaver.saveBlogEntry(entry).subscribe(data => {
      this.router.navigate(['/dashboard']);
    });
  }


}
