import { AuthModule } from './auth/auth.module';
import { NotFoundModule } from './not-found/not-found.module';
import { StaticModule } from './static/static.module';
import { AppRoutingModule } from './app-routing.module';
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
    StaticModule,
    NotFoundModule,
    AuthModule,
    AppRoutingModule,        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
