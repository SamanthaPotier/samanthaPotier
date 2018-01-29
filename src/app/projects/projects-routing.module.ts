import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent }        from './projects.component';
import { ProjectDetailsComponent }  from './details/projectDetails.component';

const projectsRoutes: Routes = [
    {
        path: 'projets',
        component: ProjectsComponent,
        data: { title: 'Liste des projets' }
    },
    {
        path: 'projets/:id',
        component: ProjectDetailsComponent
    },
];

@NgModule({
    imports: [ RouterModule.forChild(projectsRoutes) ],
    exports: [ RouterModule ]
})
export class ProjectsRoutingModule {}