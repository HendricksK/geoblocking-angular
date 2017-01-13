import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
    moduleId: module.id,
    selector: 'movies-search',
    templateUrl: 'movies.component.html',
})
export class MoviesSearchComponent {

    searchStr: string;
    searchRes: Array<Object>;
    
    constructor(private _movieService: MovieService) {}

    searchMoviesForm() {
        this._movieService.searchMovies(this.searchStr).subscribe(res => {
            this.searchRes = res.results;
        })
    }
}
