import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ConversationService {

    constructor( private _http:Http) {}

    getConversations() {
        return this._http.get('http://0.0.0.0:8080/conversations');
    }
}
