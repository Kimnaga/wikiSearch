import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { query } from '@angular/core/src/render3';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  wikiUrl : string;
  searchTitle: string; 
  resultText : string;
  q:any;
  s:any;
  resultArr : string [] = [];
  resultString : string;
  //res:any;
  constructor(private http: HttpClient) { 
    this.wikiUrl = "";
    this.searchTitle = 'dog';
  }

  getArticle(){
    console.log("in  article");
    this.wikiUrl = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=dog';
    /*const options = {
      headers : new HttpHeaders({
        Authorization: 'Bearer ' + apiKey
      })
    };
    */

    
    this.http.get(this.wikiUrl).subscribe((result) => {
      //console.log(result);
      this.q = result['query'];
      this.s = this.q['search'];

      this.s.forEach((searchResult)=>{
        //console.log (searchResult);
        //this.resultString = searchResult.snippet+"";
        //console.log(this.resultString+);
        this.resultArr.push(searchResult.title+"");
      });
      
      //console.log (this.s[0]);
      //this.res = query['search'];
    });
    return this.resultArr;
  }



}
