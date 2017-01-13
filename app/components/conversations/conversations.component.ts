import { Component } from '@angular/core';
import { ConversationService } from '../../services/conversation.service';

@Component({
    moduleId: module.id,
    selector: 'conversations',
    templateUrl: 'conversations.component.html',
})
export class ConversationsComponent {

    conversations: Object;

    constructor(private _conversationService: ConversationService) {}

    getConversations() {
        this._conversationService.getConversations().subscribe(res => {
            console.log(res);
        });
    }
}
