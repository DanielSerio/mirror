import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DatetimeComponent } from './sections/datetime/datetime.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './sections/news/news.component';
import { RoundNumberPipe } from './shared/pipes/round-number.pipe';
import { WeatherComponent } from './sections/weather/weather.component';
import { WeatherIconComponent } from './icons/weather-icon/weather-icon.component';
import { WeatherDatePipe } from './shared/pipes/weather-date.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DatetimeComponent,
    WeatherComponent,
    NewsComponent,
    RoundNumberPipe,
    WeatherIconComponent,
    WeatherDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
