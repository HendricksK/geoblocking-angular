import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { MoviesComponent }  from './components/movies/movies.component';
import { MovieComponent }  from './components/movie/movie.component';
import { MoviesSearchComponent }  from './components/movies/movies-search.component';
import { ConversationsComponent }  from './components/conversations/conversations.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule, FormsModule, routing ],
  declarations: [ AppComponent, MoviesComponent, MovieComponent, MoviesSearchComponent, ConversationsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
