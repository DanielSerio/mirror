import { Article } from './../../shared/models/news-response-data';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { timer } from 'rxjs';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  public articles: Article[];
  private timerSub: Subscription;
  private newsSub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.timerSub = timer(0, 350000)
      .subscribe(n => {
        this.newsSub = this.dataService.getNewsData().subscribe(data => {
          this.articles = data.articles;
        });
      });
  }

  ngOnDestroy() {
    this.newsSub.unsubscribe();
    this.timerSub.unsubscribe();
  }
}
