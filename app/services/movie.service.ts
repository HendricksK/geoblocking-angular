import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
    apikey:string;

    constructor(private _jsonp:Jsonp) {
        this.apikey = '787cc29e9b66bfa13c6904942d74beb4';
        console.log('Movieservice is initialized...');
    }

    getPopular() {
        //https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
            .map(res => res.json());
    }

    getInTheaters() {
        //https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-01-01&primary_release_date.lte=2017-01-10&api_key='+this.apikey)
            .map(res => res.json());
    }

    searchMovies(searchStr: string) {
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey)
            .map(res => res.json());
    }

    getMovie(id: string) {
        return this._jsonp.get('http://api.themoviedb.org/3/movie/'+id+'?api_key='+this.apikey+'&callback=JSONP_CALLBACK')
            .map(res => res.json());
    }
}
