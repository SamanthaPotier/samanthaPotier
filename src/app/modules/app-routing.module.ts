import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }                   from '@angular/router';

import { HomeComponent }            from './../home/home.component';
import { PresentationComponent }    from './../informations/presentation.component';
import { CareerComponent }          from './../informations/career.component';
// import { PageNotFoundComponent }    from './../pageNotFound.component';

const routes: Routes = [
    {
        path: 'accueil',
        component: HomeComponent,
        // data: {
        //     animation: 'home'
        // }
    },
    {
        path: 'presentation',
        component: PresentationComponent,
        // data: {
        //    animation: 'presentation'
        // }
    },
    {
        path: 'parcours',
        component: CareerComponent,
        // data: {
        //     animation: 'career'
        // }
    },
    {
        path: '**',
        redirectTo: '/accueil',
        pathMatch: 'full',
        data: {
            animation: 'home'
        }
    },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    declarations: []
    //export const routes: Routes = [ RouterModule ] 
})

export class AppRoutingModule {}