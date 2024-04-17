import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { DonorsComponent } from './donors/donors.component';
import { SupportComponent } from './support/support.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewsComponent,
    DonorsComponent,
    SupportComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatChipsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
