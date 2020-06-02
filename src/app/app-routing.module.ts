import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from './c1/c1.component';


const routes: Routes = [
  {path:'c1',component: C1Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
