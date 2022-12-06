import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,    
    RouterModule
  ]
})
export class StaticModule { }
