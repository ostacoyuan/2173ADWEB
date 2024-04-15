import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { DonorsComponent } from './donors/donors.component';
import { SupportComponent } from './support/support.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home-page' },
  { path: 'about-page', component: AboutComponent },
  { path: 'news-page', component: NewsComponent },
  { path: 'donors-page', component: DonorsComponent },
  { path: 'support-page', component: SupportComponent },
  { path: 'home-page', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
