import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import {WikipediaService} from './wikipedia/wikipedia.service';
import { GiphyComponent } from './giphy/giphy.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WikipediaComponent,
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WikipediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
