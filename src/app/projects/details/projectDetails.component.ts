import 'rxjs/add/operator/switchMap';

import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                         from '@angular/common';

import { Project }         from './../project';
import { ProjectService }  from './../../services/project.service';



@Component({
    selector: 'project-details',
    templateUrl: './projectDetails.component.html',
    styleUrls: ['./projectDetails.component.scss'],
})


export class ProjectDetailsComponent implements OnInit {
    project: Project;

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private router: Router,
        private projectService: ProjectService,
    ) {}

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.projectService.getProject(+params.get('id')))
            .subscribe(project => this.project = project);
    }

    goBack(): void {
        this.location.back();
    }
}
