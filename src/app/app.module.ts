import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './Pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
