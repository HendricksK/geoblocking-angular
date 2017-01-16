import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ConversationService } from '../../services/conversation.service';

@Component({
    moduleId: module.id,
    selector: 'chat',
    templateUrl: 'chat.component.html',
    providers: [ ChatService, ConversationService ]
})
export class ChatComponent implements OnInit, OnDestroy {
    messages: any = [];
    message:string;
    connection: any;
    username: string;
    alert: any = false;

    constructor(private _chatService:ChatService, private _conversationService:ConversationService) {

    }

    sendMessage() {
        this._chatService.sendMessage(this.message, this.username);
        this.sendChat('4567', this.messages);
        this.message = '';
        this.username = '';
    }

    ngOnInit() {
        this.connection = this._chatService.getMessages().subscribe(message => {
            this.messages.push(message);
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
