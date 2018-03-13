import { Component } from '@angular/core';
import { Meta }      from '@angular/platform-browser';

@Component({
    selector: 'presentation',
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.scss']
})

export class PresentationComponent {
    constructor(
        private meta: Meta
    ) {
        this.meta.updateTag({ name: 'description', content: 'Samantha Potier - Gestion de projet multimédia, développement front-end et Webdesign UX en freelance.' }, false);
        const author = this.meta.getTag('name=author');
        const keywords = this.meta.getTag('name=keywords');
    }
}
