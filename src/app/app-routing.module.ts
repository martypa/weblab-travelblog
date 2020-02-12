import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TravelBlogComponent} from './travel-blog/travel-blog.component';
import {BlogEditingComponent} from './travel-blog/blog-editing/blog-editing.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'blogDetail/:id', component: TravelBlogComponent},
  {path: 'createBlogEntry', component: BlogEditingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
