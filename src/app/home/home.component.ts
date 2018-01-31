import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Project }           from './../projects/project';
import { ProjectService }    from './../services/project.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
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
            .then(projects => this.projects = projects.slice(1, 5));
    }

    onSelect(project: Project) {
        this.router.navigate(['/projets', project.id]);
    }
}
