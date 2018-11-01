import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment}from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  giphyURL : string ='';
  data : any[] =[];
  resultArr : string [] = [];
  constructor(private http : HttpClient) {
  }

  
   
   getGiphy() : string[]{
     this.giphyURL = 'https://api.giphy.com/v1/gifs/search?api_key=IwMT0WNVrL3rJSb1ugd6wk0HC2pIwun6&q=dog&limit=25&offset=0&rating=G&lang=en';
     this.http.get (this.giphyURL).subscribe((result)=>{
        console.log (result);
        result['data'].forEach((data)=>{
          console.log(data.images.fixed_height_downsampled.url+" ");
          this.resultArr.push(data.images.fixed_height_downsampled.url+"");
        });
     });
     return this.resultArr;
   }

}
