import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlaceComponent } from './Components/list-place/list-place.component';
import {  HttpClientModule } from '@angular/common/http';
import { PlaceDetailComponent } from './components/place-detail/place-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlaceComponent,
    PlaceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
