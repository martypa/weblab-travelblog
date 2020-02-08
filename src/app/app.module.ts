import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  _MatMenuDirectivesModule,
  MatButtonModule, MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatRippleModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { TravelBlogComponent } from './travel-blog/travel-blog.component';
import { TravelBlogEntryComponent } from './travel-blog-entry/travel-blog-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TravelBlogComponent,
    TravelBlogEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatRippleModule,
    _MatMenuDirectivesModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
