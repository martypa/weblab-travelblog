import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  _MatMenuDirectivesModule,
  MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule,
  MatIconModule,
  MatMenuModule, MatNativeDateModule,
  MatRippleModule, MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { TravelBlogComponent } from './travel-blog/travel-blog.component';
import { TravelBlogEntryComponent } from './travel-blog/travel-blog-entry/travel-blog-entry.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './authentication/login/login.component';
import {AuthenticationModule} from './authentication/authentication.module';
import { BlogEditingComponent } from './travel-blog/blog-editing/blog-editing.component';
import {MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TravelBlogComponent,
    TravelBlogEntryComponent,
    BlogEditingComponent,
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
    HttpClientModule,
    AuthenticationModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
