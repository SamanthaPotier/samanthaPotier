import { trigger, state, animate, transition, style } from '@angular/animations';

export const enterLeft =
    trigger('enterLeft', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
            style({transform: 'translateX(-100%)'}),
            animate(1000)
        ]),
        transition('* => void', [
            animate('0.4s 0s ease-in', style({transform: 'translateX(100%)'}))
        ])
    ]);