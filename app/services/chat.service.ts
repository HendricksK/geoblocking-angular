import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class ChatService {
    private url = 'http://localhost:8000';
    private socket:any;
    private conversate: Object;

    constructor( private _http:Http) {}

    sendMessage(message:string, username:string) {
        this.socket.emit('add-message', message, username);
    }

    getMessages() {
        let observable = new Observable((observer:any) => {
            this.socket = io(this.url);
            this.socket.on('message', (data:any) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            }
        })
        return observable;
    }

    getUsername() {
        return sessionStorage.getItem('username');
    }

    setUsername(username:string) {
        console.log('Username set: ' + username);
        sessionStorage.setItem('username', username);
    }

    sendConversations() {
        //return this._http.post('http://0.0.0.0:8080/conversation/new/'+this.conversate, '');

        let data = new URLSearchParams();
        data.append('movie_id', '748593');
        data.append('create_date', '2016-06-07');
        data.append('edited', '2016-08-06');

        this.conversate = [{
            movie_id: '748593',
            create_date: '2016-06-07',
            edited: '2016-08-06',
            conversation: "Let me tell you something you already know. The world ain't all sunshine and rainbows. It's a very mean and nasty place, and I don't care how tough you are, it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain't about how hard you hit. It's about how hard you can get hit and keep moving forward; how much you can take and keep moving forward. That's how winning is done! Now, if you know what you're worth, then go out and get what you're worth. But you gotta be willing to take the hits, and not pointing fingers saying you ain't where you wanna be because of him, or her, or anybody. Cowards do that and that ain't you. You're better than that! I'm always gonna love you, no matter what. No matter what happens. You're my son and you're my blood. You're the best thing in my life. But until you start believing in yourself, you ain't gonna have a life."
        }];

        window.console.log(JSON.stringify(this.conversate));

        return this._http.post('http://0.0.0.0:8080/conversation/new/', JSON.stringify(this.conversate));
    }
}
