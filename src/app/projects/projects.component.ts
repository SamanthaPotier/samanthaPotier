import { Component, OnInit } from '@angular/core';
import { Meta, Title }              from '@angular/platform-browser';
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
    // title = 'Samantha Potier';

    constructor(
        private router: Router,
        private projectService: ProjectService,
        private meta: Meta,
        private titleService: Title
    ) {
        this.meta.updateTag({ name: 'description', content: 'Samantha Potier - Gestion de projet multimédia, développement front-end et Webdesign UX en freelance. Vous pouvez retrouver quelques projets réalisés par Samantha Potier.' }, false);
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

    onSelect(project: Project) {
        this.router.navigate(['/projets', project.id]);
        // this.router.navigate(['/projets', { id: project.id, slug: project.slug }]);
    }

}




