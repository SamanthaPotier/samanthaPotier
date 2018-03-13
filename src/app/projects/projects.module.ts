import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ProjectsComponent }        from './projects.component';
import { ProjectDetailsComponent }  from './details/projectDetails.component';

import { ProjectService }           from './../services/project.service';
import { ProjectsRoutingModule }    from './projects-routing.module';


@NgModule({
    imports: [
        CommonModule,
        ProjectsRoutingModule
    ],
    declarations: [
        ProjectsComponent,
        ProjectDetailsComponent
    ],
    providers: [ ProjectService ]
})
export class ProjectsModule {}