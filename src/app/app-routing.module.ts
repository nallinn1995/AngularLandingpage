import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [{
  path:'',
  component:MainComponent,
  children:[
    {path:'',component:HomeComponent,pathMatch:'full'}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
