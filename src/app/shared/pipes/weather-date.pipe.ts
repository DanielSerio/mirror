import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'weatherDate'
})
export class WeatherDatePipe extends DatePipe implements PipeTransform {

  transform(value: number, args?: string): string {
    const date: Date = new Date(value * 1000);
    return super.transform(date, args);
  }

}
