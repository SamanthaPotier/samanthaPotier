import { Component } from '@angular/core';
import { Meta }      from '@angular/platform-browser';
import { fadeInAnimation }    from '../shared/animations/index';

@Component({
    selector: 'presentation',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' },
    templateUrl: './presentation.component.html',
    styleUrl: './presentation.component.scss',
    standalone: false
})

export class PresentationComponent {
    constructor(
        private meta: Meta
    ) {
        this.meta.updateTag({ name: 'description', content: 'Samantha Potier - Gestion de projet multimédia, développement front-end et Webdesign UX en freelance.' });
        const author = this.meta.getTag('name=author');
        const keywords = this.meta.getTag('name=keywords');
    }
}
