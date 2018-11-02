import { Component, OnInit} from '@angular/core';
import {GiphyService}from './giphy.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  dataArr : Observable<any[]>;
  searchText : string;
  constructor(private service : GiphyService) { }

  getImage(){
    if (this.searchText != null) {
      this.service.getGiphy(this.searchText).subscribe((result)=>{
        console.log(result);
        this.dataArr=result['data'];
        console.log(this.dataArr[0].images.fixed_height_downsampled.url+" ");
      });
    }
  }

  ngOnInit() {
  }



}
