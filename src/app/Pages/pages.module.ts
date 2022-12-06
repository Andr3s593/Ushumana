import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { StaticModule } from "../static/static.module";

@NgModule({
    declarations: [
        HomeComponent,
        PagesComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        StaticModule
    ]
})
export class PagesModule { }
