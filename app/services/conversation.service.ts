import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ConversationService {
    conversate: Object;
    date: Date;

    constructor( private _http:Http) {
    }

    getConversations() {
        return this._http.get('http://0.0.0.0:8080/conversations');
    }

    getConversation(movie_id:string) {
        return this._http.get('http://0.0.0.0:8080/conversation/'+movie_id);
    }

    sendConversations(movie_id:string, conversation_data:any) {
        let res = this._http.get('http://0.0.0.0:8080/conversation/'+movie_id).subscribe(res => {});

        this.date = new Date();
        console.log(res);
        if(this.check == undefined) {
            console.log('imaundefined');
            this.conversate = [{
                movie_id: movie_id,
                create_date: this.date,
                edited: this.date,
                conversation: JSON.stringify(conversation_data)
            }];

            return this._http.post('http://0.0.0.0:8080/conversation/new/', JSON.stringify(this.conversate));
        }

        this.conversate = [{
            movie_id: movie_id,
            edited: this.date,
            conversation: JSON.stringify(conversation_data)
        }];

        return this._http.put('http://0.0.0.0:8080/conversation/update/', JSON.stringify(this.conversate));
    }

    deleteConversation(id:string) {
        return this._http.delete('http://0.0.0.0:8080/conversation'+id);
    }
}
