import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

// import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs'; 
import { Observable } from 'rxjs'

import { Project } from './../projects/project';

@Injectable({ 
    providedIn: 'root' 
}) 

export class ProjectService {
    
    private headers = new Headers({'Content-Type': 'application/json'});
    // private projectsUrl = 'api/projects';  // URL to web api
    private apiUrl = 'api/projects'; // Remplacez par l'URL de votre API 

    constructor(
        private http: HttpClient,
        // private backend: BackendService
    ) { }


    getProjects(): Promise<Project[]> {
        return this.http.get(this.projectsUrl)
            .toPromise()
            .then(response => response?.json().data as Project[])
            .catch(this.handleError);
    }

    // getHeroes() {
    //     this.backend.getAll(Hero).then( (heroes: Hero[]) => {
    //         this.logger.log(`Fetched ${heroes.length} heroes.`);
    //         this.heroes.push(...heroes); // fill cache
    //     });
    //     return this.heroes;
    // }


    getProject(id: number): Promise<Project> {
        const url = `${this.projectsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response?.json().data as Project[])
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
