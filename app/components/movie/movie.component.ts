import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { ChatService } from '../../services/chat.service';
import { ChatComponent }  from '../chat/chat.component';

@Component({
    moduleId: module.id,
    selector: 'movie',
    templateUrl: 'movie.component.html',
    providers: [ ChatComponent, ChatService ]
})
export class MovieComponent implements OnInit {
    movie: Object;
    movie_id: string;
    constructor(
        private router:ActivatedRoute,
        private _movieService:MovieService) {

    }

    ngOnInit() {
        this.router.params.subscribe((params) => {
            this.movie_id = params['id'];
            this._movieService.getMovie(this.movie_id).subscribe(movie => {
                this.movie = movie;
            })
        })
    }

    getMovieId() {
        return this.movie_id;
    }

}
