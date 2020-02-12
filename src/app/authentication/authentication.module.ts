import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatDialogModule, MatFormFieldModule} from '@angular/material';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [
    LoginComponent,
  ]
})
export class AuthenticationModule { }
