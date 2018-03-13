import { Component, OnInit } from '@angular/core';
import { DatePipe }          from '@angular/common';
import { Title }             from '@angular/platform-browser';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = 'Samantha Potier - Gestion de projet multimédia, Développement et Webdesign UX - Freelance - Yvelines';
    today = Date.now();
    fixedTimezone = '2015-06-15T09:03:01+0900';
    private mobile = false;
    private _opened: boolean = false;
    private _modeNum: number = 0;
    private _closeOnClickBackdrop: boolean = true;
    private _showBackdrop: boolean = true;

    private _MODES: Array<string> = ['over', 'push', 'slide'];
    
    private _toggleSidebar(){
        this._opened = !this._opened;
    }

    public constructor(private titleService: Title ) { }
    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

    ngOnInit(): void {
        if (window.screen.width <= 540) {
            this.mobile = true;
         }
    }
}