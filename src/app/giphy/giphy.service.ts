import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment}from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  giphyURL : string ='';
  data : any[] =[];
  constructor(private http : HttpClient) {
  }

  
   
   getGiphy(searchText : string) {
     this.giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=${environment.apiKey}&q=${searchText}&limit=25&offset=0&rating=G&lang=en`;
     return this.http.get (this.giphyURL);
     /*
     this.http.get (this.giphyURL).subscribe((result)=>{
        console.log (result);
          //console.log(data.images.fixed_height_downsampled.url+" ");
          this.resultArr = result['data'];
     });
     return this.resultArr;*/

   }

}
