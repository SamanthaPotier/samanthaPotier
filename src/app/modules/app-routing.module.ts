import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }            from './../home/home.component';
import { PresentationComponent }    from './../informations/presentation.component';
import { CareerComponent }          from './../informations/career.component';
// import { PageNotFoundComponent }    from './../pageNotFound.component';

const appRoutes: Routes = [
    {
        path: 'accueil',
        component: HomeComponent
    },
    {
        path: 'presentation',
        component: PresentationComponent
    },
    {
        path: 'parcours',
        component: CareerComponent
    },
    {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes/*, { enableTracing: true }*/ /*only for debuging purpose */) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}