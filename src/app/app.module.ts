import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './speakers/bio/bio.component';
import { SpeakersListComponent } from './speakers/speakers-list/speakers-list.component';
import {RoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SpeakersComponent,
    HomeComponent,
    BioComponent,
    SpeakersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
