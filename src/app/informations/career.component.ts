import { Component } from '@angular/core';

@Component({
    selector: 'career',
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.scss']
})

export class CareerComponent {
    selectedIndex = -1;
    setSelected(id: number) {
        this.selectedIndex = id;
     }
}
