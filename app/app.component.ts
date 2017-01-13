import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';
import { ConversationService } from './services/conversation.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [ MovieService, ConversationService ]
})
export class AppComponent  { name = 'Angular'; }
