import { Component, OnInit } from '@angular/core';
import { Meta, Title }       from '@angular/platform-browser';
import { Router }            from '@angular/router';
import { trigger,state,style,animation,transition,animate,group,query,stagger } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';

import { Project }           from './project';
import { ProjectService }    from './../services/project.service';

@Component({
    selector: 'my-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [
        trigger('flyInOut', [
            transition('* => *', [
                query('.projects__itemFig',
                    style({ transform: 'translateY(-100%)'}),
                    { optional: true }
                ),
                query('.projects__itemFig',
                    stagger('100ms', [
                        animate('200ms ease', style({ transform: 'translateY(0)'}))
                    ]), { optional: true }
                )
            ])
            // state('in', style({transform: 'scale(1)', opacity: 1})),
            // transition('void => *', [
            //     style({transform: 'scale(0)', opacity: 0}),
            //     animate('2s 0.1s ease'),
            // ]),
        ])
    ]
})

export class ProjectsComponent implements OnInit {
    projects: Project[];
    // title = 'Samantha Potier';

    constructor(
        private router: Router,
        private projectService: ProjectService,
        private meta: Meta,
        private titleService: Title
    ) {
        this.meta.updateTag({ name: 'description', content: 'Samantha Potier - Gestion de projet multimédia, développement front-end et Webdesign UX en freelance. Vous pouvez retrouver quelques projets réalisés par Samantha Potier.' });
        const author = this.meta.getTag('name=author');
        const keywords = this.meta.getTag('name=keywords');
    }

    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

    getProjects(): void {
        this.projectService.getProjects().then(projects => this.projects = projects);
    }

    ngOnInit(): void {
        this.getProjects();
    }
    // ngOnInit(): void {
    //     this.getProjects()
    //         .then(projects => this.projects = projects.display = true);
    // }
    // 
    // ngOnInit(): void {
    //     this.projectService.getProjects()
    //         .then(projects => this.projects = projects.slice(0, 5));
    // }

    onSelect(project: Project) {
        this.router.navigate(['/projets', project.id]);
        // this.router.navigate(['/projets', { id: project.id, slug: project.slug }]);
    }

}




