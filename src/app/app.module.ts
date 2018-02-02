import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';
import { HttpModule }                from '@angular/http';
import { BemModule }                 from 'angular-bem';
// import { slickCarousel }       from 'angular-slick-carousel';
import { ProjectService }     from './services/project.service';
import { AppRoutingModule }   from './modules/app-routing.module';

import { ProjectsModule }         from './projects/projects.module';
// import { ProjectsRoutingModule }  from './projects/projects-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './data/in-memory-data.service';

import { AppComponent }            from './app.component';
import { HomeComponent }           from './home/home.component';
// import { ProjectsComponent }       from './projects/projects.component';
// import { ProjectDetailsComponent } from './projects/details/projectDetails.component';
import { PresentationComponent }   from './informations/presentation.component';
import { CareerComponent }         from './informations/career.component';
// import { PageNotFoundComponent }   from './pageNotFound.component';

BemModule.config({
  separators: ['__', '_', '-'], // el / mod / val separators
  modCase: 'kebab', // case of modifiers names
  ignoreValues: false // cast mod values to booleans
});

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        ProjectsModule,
        // ProjectsRoutingModule,
        AppRoutingModule,
        BemModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        // ProjectsComponent,
        // ProjectDetailsComponent,
        PresentationComponent,
        CareerComponent,
        // PageNotFoundComponent
    ],
    providers: [ ProjectService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
