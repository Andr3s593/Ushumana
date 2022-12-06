import { ReservasComponent } from './reservas/reservas.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes:Routes =[
  {path:'home', 
  component:HomeComponent, 
  children:[      
      {path:'reservas', component:ReservasComponent},
      {path:'home', component:HomeComponent}
  ]}
  
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class PagesRoutingModule { }
