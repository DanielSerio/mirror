import { Subscription } from 'rxjs';
import { DataService } from './../../shared/services/data.service';
import { WeatherResponseData } from './../../shared/models/weather-response-data';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  public weatherResponse: WeatherResponseData | null;
  private timerSub: Subscription;
  private weatherSub;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.timerSub = timer(0, 200000).subscribe(n => {
      this.weatherSub = this.dataService.getWeatherData()
        .subscribe(data => this.weatherResponse = data);
    });
  }

  ngOnDestroy() {
    this.timerSub.unsubscribe();
    this.weatherSub.unsubscribe();
  }
}
