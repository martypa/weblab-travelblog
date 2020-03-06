import {Component, OnInit, ViewChild} from '@angular/core';
import {BlogDetailLoaderService} from '../services/blog-detail-loader.service';
import {BlogHeaderModel} from './BlogHeaderModel';
import {BlogEntryModel} from './travel-blog-entry/BlogEntryModel';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {BlogEntryDeleteService} from '../services/blog-entry-delete.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-travel-blog',
  templateUrl: './travel-blog.component.html',
  styleUrls: ['./travel-blog.component.scss']
})
export class TravelBlogComponent implements OnInit {
  private subscription: Subscription;

  constructor(
    private blogLoader: BlogDetailLoaderService,
    private route: ActivatedRoute,
    private deleteService: BlogEntryDeleteService,
  ) { }

  private id;
  public headermodel: BlogHeaderModel = {_id: '', title: '', description: '', duration: '', location: '', type: 'header'};
  public posts: BlogEntryModel[] = [{_id: '', title: '', date: '', picDiscription: '',
    picFile: '', text: '', type: 'entry', picutre: null, blog: 0, id: NaN}];


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.blogLoader.getBlogHeader(this.id).subscribe(header => {
      this.headermodel = header;
    });

    this.blogLoader.getBlogEntries(this.id).subscribe(entries => {
      const tmp: BlogEntryModel[] = entries;
      tmp.forEach(post => {
        this.blogLoader.getBlogImage(post.picFile).subscribe(image => {
           const reader = new FileReader();
           reader.addEventListener('load', () => {
              this.posts.filter(x => x._id === post._id)[0].picutre = reader.result;
           }, false);
           reader.readAsDataURL(image);
        });
      });
      this.posts = tmp;
    });
    this.subscription = this.deleteService.observerBlogDelete.subscribe(item => {
      const h = this.posts.find(element => element.picutre == item.pictureFile);
      if (h !== undefined) {
        this.posts = this.posts.filter(obj => obj !== h);
        this.deleteService.removeRemote(h._id, this.id).subscribe(response => {
            console.log(response);
        });
      }
    });
  }

}
