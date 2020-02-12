import {Component, OnInit, ViewChild} from '@angular/core';
import {BlogDetailLoaderService} from '../services/blog-detail-loader.service';
import {BlogHeaderModel} from './BlogHeaderModel';
import {BlogEntryModel} from './travel-blog-entry/BlogEntryModel';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-travel-blog',
  templateUrl: './travel-blog.component.html',
  styleUrls: ['./travel-blog.component.scss']
})
export class TravelBlogComponent implements OnInit {

  constructor(
    private blogLoader: BlogDetailLoaderService,
    private route: ActivatedRoute,
  ) { }

  public headermodel: BlogHeaderModel = {_id: '', title: '', description: '', duration: '', location: '', type: 'header'};
  public posts: BlogEntryModel[] = [{_id: '', title: '', date: '', picDiscription: '', picFile: '', text: '', type: 'entry', picutre: null}];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogLoader.getBlogHeader(Number(id)).subscribe(header => {
      this.headermodel = header;
    });
    this.blogLoader.getBlogEntries(Number(id)).subscribe(entries => {
      this.posts = entries;
      this.posts.forEach(post => {
        this.blogLoader.getBlogImage(post.picFile).subscribe(image => {
           post.picutre = image;
        });
      });
    });

  }
}
