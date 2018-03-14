import { Component }          from '@angular/core';
import { Meta }               from '@angular/platform-browser';
import { fadeInAnimation }    from '../shared/animations/index';


@Component({
    selector: 'career',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': ''},
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.scss']
})

export class CareerComponent {
    selectedIndex = -1;
    setSelected(id: number) {
        this.selectedIndex = id;
    }

    constructor(
        private meta: Meta
    ) {
        this.meta.updateTag({ name: 'description', content: 'Samantha Potier - Gestion de projet multimédia, développement front-end et Webdesign UX en freelance. Vous pouvez retrouver le parcours professionnel de Samantha Potier.' });
        const author = this.meta.getTag('name=author');
        const keywords = this.meta.getTag('name=keywords');
    }
}
