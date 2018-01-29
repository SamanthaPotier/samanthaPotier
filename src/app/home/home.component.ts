import { Component, OnInit } from '@angular/core';

import { Project }           from './../projects/project';
import { ProjectService }    from './../services/project.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    projects: Project[] = [];

    constructor(private projectService: ProjectService) { }

    ngOnInit(): void {
        this.projectService.getProjects()
            .then(projects => this.projects = projects.slice(1, 5));
    }
}
