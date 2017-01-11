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
}
