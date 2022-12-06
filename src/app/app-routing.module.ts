import { AuthRoutingModule } from './auth/auth-routing.module';
import { NotFoundRoutingModule } from './not-found/not-found-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { StaticRoutingModule } from './static/static-routing.module';
import { PagesRoutingModule } from './Pages/pages-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[     
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'**', component:NotFoundComponent}            
    ]


@NgModule({
  declarations: [],
  imports: [        
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    StaticRoutingModule,
    NotFoundRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
