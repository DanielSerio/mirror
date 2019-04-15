import { Article } from './../../shared/models/news-response-data';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { testData } from './test-data';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public articles: Article[] = testData;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
