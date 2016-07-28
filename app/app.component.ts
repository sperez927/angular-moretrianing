import { Component } from '@angular/core';

import {MediaItemComponent} from './media-item.component';

@Component({
    selector: 'media-tracker-app',
    directives: [MediaItemComponent],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {}