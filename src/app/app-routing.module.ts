import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './Pages/pages-routing.module';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[  
    {path:'home', children:[
      {path:'**', component:HomeComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
    ]}    
]

@NgModule({
  declarations: [],
  imports: [        
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
