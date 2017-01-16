import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ConversationService } from '../../services/conversation.service';
import { MovieService } from '../../services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'chat',
    templateUrl: 'chat.component.html',
    providers: [ ChatService, ConversationService, MovieService ]
})
export class ChatComponent implements OnInit, OnDestroy {
    messages: any = [];
    message:string;
    connection: any;
    username: string;
    alert: any = false;
    movie_id: string;

    constructor(private _chatService:ChatService, private _conversationService:ConversationService, private router:ActivatedRoute) {

    }

    sendMessage() {
        this._chatService.sendMessage(this.message, this.username);
        this.messages.push(this.message);
        this.sendChat(this.movie_id, this.messages);
        this.message = '';
    }

    ngOnInit() {
        this.connection = this._chatService.getMessages().subscribe(message => {
            this.messages.push(message);
        });
        this.router.params.subscribe((params) => {
            this.movie_id = params['id'];
        });
    }

    ngOnDestroy() {
        this.connection.unsubscribe();
    }

    setUsername() {
        this._chatService.setUsername(this.username);
        this.alert = 'Username is set';
    }

    sendChat(movie_id:string, conversation_data:any) {
        this._conversationService.sendConversations(movie_id, conversation_data).subscribe( res => {
                console.log(res);
        });
    }
}
