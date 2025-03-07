import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appMobile]',
    standalone: false
})

export class mobileDirective{
    private mobile = true;

    @Input() set appMobile(mobile: boolean) {
        if (!mobile) {
            this.mobile = false;
        } else if (mobile) {
            this.mobile = true;
        }
    }
}



