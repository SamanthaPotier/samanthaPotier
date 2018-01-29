import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Project }           from './project';
import { ProjectService }    from './../services/project.service';

@Component({
    selector: 'my-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
    projects: Project[];

    constructor(
        private router: Router,
        private projectService: ProjectService        
    ) {}

    getProjects(): void {
        this.projectService.getProjects().then(projects => this.projects = projects);
    }

    ngOnInit(): void {
        this.getProjects();
    }

    onSelect(project: Project) {
        this.router.navigate(['/projets', project.id]);
    }

}




