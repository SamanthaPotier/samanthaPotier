import { Component, OnInit }  from '@angular/core';
import { Meta }               from '@angular/platform-browser';
import { Router }             from '@angular/router';
import { NguCarouselConfig }  from '@ngu/carousel';

import { Project }            from './../projects/project';
import { ProjectService }     from './../services/project.service';
import { fadeInAnimation }    from '../shared/animations/index';


@Component({
    selector: 'home',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: false
})

export class HomeComponent implements OnInit {
    public carouselOne!: NguCarouselConfig;
    projects: Project[] = [];

    constructor(
        private router: Router,
        private projectService: ProjectService,
        private meta: Meta
    ) { 
        this.meta.updateTag({ name: 'description', content: 'Samantha Potier - Gestion de projet multimédia, développement front-end et Webdesign UX en freelance. Vous accompagne dans le développement de votre projet multimédia.' });
        const author = this.meta.getTag('name=author');
        const keywords = this.meta.getTag('name=keywords');
    }

    getProjects(): void {
        this.projectService.getProjects().then(projects => this.projects = projects);
    }

    ngOnInit(): void {
        this.projectService.getProjects()
            .then(projects => this.projects = projects.slice(-5, -1));
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
