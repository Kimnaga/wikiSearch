import { Component, OnInit } from '@angular/core';
import {WikipediaService} from './wikipedia.service';
@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {
  resArr : string[];
  constructor(private wikiService : WikipediaService) { 
  }


  getWiki(){
    this.resArr = this.wikiService.getArticle();
  }

  ngOnInit() {
  }

}
