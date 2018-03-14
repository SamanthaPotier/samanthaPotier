import { NgModule }                  from '@angular/core';
import { BrowserModule, Meta, Title }       from '@angular/platform-browser';
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';
import { HttpModule }                from '@angular/http';
import { BemModule }                 from 'angular-bem';
import { SidebarModule }             from 'ng-sidebar';
import { NgxCarouselModule }         from 'ngx-carousel';
import 'hammerjs';
import {ScrollToModule}              from 'ng2-scroll-to';

import { ProjectService }     from './services/project.service';
import { AppRoutingModule }   from './modules/app-routing.module';

import { ProjectsModule }         from './projects/projects.module';
// import { ProjectsRoutingModule }  from './projects/projects-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/data/in-memory-data.service';
import { mobileDirective }      from './shared/mobile.directive';

import { AppComponent }            from './app.component';
import { HomeComponent }           from './home/home.component';
import { PresentationComponent }   from './informations/presentation.component';
import { CareerComponent }         from './informations/career.component';
// import { PageNotFoundComponent }   from './pageNotFound.component';

BemModule.config({
  separators: ['__', '_', '-'], // el / mod / val separators
  modCase: 'kebab', // case of modifiers names
  ignoreValues: true // cast mod values to booleans
});

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        BemModule,
        ProjectsModule,
        // ProjectsRoutingModule,
        AppRoutingModule,
        SidebarModule.forRoot(),
        NgxCarouselModule,
        ScrollToModule.forRoot(), 
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        // ProjectsComponent,
        // ProjectDetailsComponent,
        PresentationComponent,
        CareerComponent,
        // PageNotFoundComponent
        mobileDirective
    ],
    providers: [ 
        ProjectService,
        Title
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
