import { Component, OnInit } from '@angular/core';
import {GiphyService}from './giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  urlArr : string []  = [];
  constructor(private service : GiphyService) { }

  getImage(){
    this.urlArr = this.service.getGiphy();
  }

  ngOnInit() {
  }



}
