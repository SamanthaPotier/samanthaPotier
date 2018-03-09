import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { NgxCarousel }       from 'ngx-carousel';

import { Project }           from './../projects/project';
import { ProjectService }    from './../services/project.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    public carouselOne: NgxCarousel;
    projects: Project[] = [];

    constructor(
        private router: Router,
        private projectService: ProjectService
    ) { }

    getProjects(): void {
        this.projectService.getProjects().then(projects => this.projects = projects);
    }

    ngOnInit(): void {
        this.projectService.getProjects()
            .then(projects => this.projects = projects.slice(0, 5));
        this.carouselOne = {
            grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: false,
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        }

    }

    public myfunc(event: Event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
    }

    onSelect(project: Project) {
        this.router.navigate(['/projets', project.id]);
    }
}
