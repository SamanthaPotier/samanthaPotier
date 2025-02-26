import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe }    from '@angular/common';
import { Title }                     from '@angular/platform-browser';
import { RouterOutlet }              from '@angular/router';
import { SidebarComponent }         from './sidebar/sidebar.component';


@Component({
    selector: 'my-app',
    standalone: true,
    imports: [RouterOutlet, SidebarComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
    title = 'Samantha Potier - Gestion de projet multimédia, Développement et Webdesign UX - Freelance - Yvelines';
    today = Date.now();
    fixedTimezone = '2015-06-15T09:03:01+0900';
    
    private mobile = false;

    isSidebarCollapsed = true;
    onSidebarToggle() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }

    // PREVIOUS SIDEBAR (??)
    // private _opened: boolean = false;
    // private _modeNum: number = 0;
    // private _closeOnClickBackdrop: boolean = true;
    // private _showBackdrop: boolean = true;
    // private _MODES: Array<string> = ['over', 'push', 'slide'];
    // private _toggleSidebar(){
    //     this._opened = !this._opened;
    // }
    // END PREVIOUS SIDEBAR (??)

    public constructor(private titleService: Title ) { }
    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

    getState(outlet: any) {
        return outlet.activatedRouteData.state;
    }

    ngOnInit(): void {
        if (window.screen.width <= 540) {
            this.mobile = true;
         }
    }
}