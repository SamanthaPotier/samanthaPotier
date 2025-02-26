// import 'rxjs/add/operator/switchMap';
// import 'rxjs/operator/switchMap';

import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                         from '@angular/common';

import { switchMap } from 'rxjs/operators';

import { Project }                 from './../project';
import { ProjectService }          from './../../services/project.service';
import { enterLeft, fadeInAnimation }    from '../../shared/animations/index';




@Component({
    selector: 'project-details',
    animations: [
        enterLeft,
        fadeInAnimation
    ],
    host: {
        '[@enterLeft]': '',
        '[@fadeInAnimation]': ''
    },
    templateUrl: './projectDetails.component.html',
    styleUrl: './projectDetails.component.scss',
    standalone: false
})


export class ProjectDetailsComponent implements OnInit {
    project!: Project;

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private router: Router,
        private projectService: ProjectService,
    ) {}

    ngOnInit() {

        this.route.params.pipe(switchMap((data: Project) => 
        this.projectService.getProject(data.id)))
        .subscribe((data: Project) =>  this.project = data);




        /*

        INITIAL
        this.route.paramMap
            .switchMap((params: ParamMap) => this.projectService.getProject(+params.get('id')))
            .subscribe(project => this.project = project);

        NOUVELLE SOURCE
            this.route.params.pipe(switchMap((data: Passengers) => 
            this.passengerService.getPassenger(data.id)))
            .subscribe((data: Passengers) =>  this.passenger = data);
        */
    }



    goBack(): void {
        this.location.back();
    }
}
