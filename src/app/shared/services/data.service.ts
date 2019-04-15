import { WeatherResponseData } from './../models/weather-response-data';
import { NewsResponseData } from './../models/news-response-data';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { config } from 'config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getNewsData(): Observable<NewsResponseData> {
    return this.http.get<NewsResponseData>(this.newsURL);
  }

  public getWeatherData(): Observable<WeatherResponseData> {
    return this.http.get<WeatherResponseData>(this.weatherURL);
  }

  get newsURL(): string {
    const country: string = config.location.country;
    const key: string = config.keys.news;

    return `https:newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`;
  }

  get weatherURL(): string {
    const key: string = config.keys.weather;
    const lat: number = config.location.lat;
    const long: number = config.location.long;

    return `https:api.darksky.net/forecast/${key}/${lat},${long}`;
  }
}
