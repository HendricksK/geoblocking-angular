import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ConversationService {
    conversate: Object;
    check: Object;

    constructor( private _http:Http) {}

    getConversations() {
        return this._http.get('http://0.0.0.0:8080/conversations');
    }

    getConversation(movie_id:string) {
        return this._http.get('http://0.0.0.0:8080/conversation'+movie_id);
    }

    public sendConversations(movie_id:string, conversation_data:any) {

        this.check = this._http.get('http://0.0.0.0:8080/conversation' + movie_id);

        window.console.log('conversations' + this.check);

        if(this.check === undefined){
            this.conversate = [{
                movie_id: movie_id,
                create_date: '2016-06-07',
                edited: '2016-08-06',
                conversation: JSON.stringify(conversation_data)
            }];

            window.console.log(JSON.stringify(this.conversate));

            return this._http.post('http://0.0.0.0:8080/conversation/new/', JSON.stringify(this.conversate));
        }

        this.conversate = [{
            movie_id: movie_id,
            create_date: '2016-06-07',
            edited: '2016-08-06',
            conversation: JSON.stringify(conversation_data)
        }];

        window.console.log(JSON.stringify(this.conversate));

        return this._http.put('http://0.0.0.0:8080/conversation/update/', JSON.stringify(this.conversate));
    }
}
