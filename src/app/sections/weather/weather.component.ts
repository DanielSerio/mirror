import { WeatherResponseData } from './../../shared/models/weather-response-data';
import { Component, OnInit } from '@angular/core';
import { weatherTestData } from './test-data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherResponse: WeatherResponseData = weatherTestData;
  constructor() { }

  ngOnInit() {
  }

}
