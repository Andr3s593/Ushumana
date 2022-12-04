import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,        
    RouterModule
  ]
})
export class PagesModule { }
