import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [{path:'home', component:HomeComponent}, {path:'about', component:AboutComponent}, {path:'dashboad', component:DashboadComponent},
{path:'data-binding', component:DataBindingComponent},{path:'directives', component:DirectivesComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
