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
import { BlogEditingComponent } from './travel-blog/blog-editing/blog-editing.component';
import {MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import { CreateTravelComponent } from './travel-blog/create-travel/create-travel.component';
import {LoginComponent} from './authentication/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TravelBlogComponent,
    TravelBlogEntryComponent,
    BlogEditingComponent,
    CreateTravelComponent,
    LoginComponent
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
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        FileUploadModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
