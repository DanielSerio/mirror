import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public datetime: Date = new Date();

  constructor() { }

  ngOnInit() {
    this.subscription =timer(0, 1000)
      .subscribe(n => {
        this.datetime = new Date();
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
