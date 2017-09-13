import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherlistComponent } from './weatherlist/weatherlist.component';
import { WeatherService } from './weather/weather.service';

//forms
import { FormsModule } from '@angular/forms';
//HTTP
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherlistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
