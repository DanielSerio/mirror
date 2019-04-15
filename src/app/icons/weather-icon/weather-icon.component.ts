import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent implements OnInit {
  @Input() name: string;
  @Input() size: 'large' | 'small';


  constructor() { }

  ngOnInit() {
  }


  get iconName(): string {
    switch (this.name) {
      case 'clear-day':
        return 'day-sunny';
        break;
      case 'clear-night':
        return 'night-clear';
        break;
      case 'rain' || 'thunderstorm':
        return 'rain-wind';
        break;
      case 'snow':
        return 'snow';
        break;
      case 'sleet':
        return 'sleet';
        break;
      case 'wind':
        return 'cloudy-gusts';
        break;
      case 'fog':
        return 'fog';
        break;
      case 'cloudy':
        return 'cloudy';
        break;
      case 'partly-cloudy-day':
        return 'day-sunny-overcast';
        break;
      case 'partly-cloudy-night':
        return 'night-partly-cloudy';
        break;
      case 'hail':
        return 'hail';
        break;
      case 'tornado':
        return 'tornado';
        break;
      default: 'na';
    }
  }

  get url(): string { return `./assets/svg/weather/wi-${this.iconName}.svg`; }
}
