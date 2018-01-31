import { Component } from '@angular/core';
import { DatePipe }  from '@angular/common';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'Samantha Potier';
    today = Date.now();
    fixedTimezone = '2015-06-15T09:03:01+0900';
}