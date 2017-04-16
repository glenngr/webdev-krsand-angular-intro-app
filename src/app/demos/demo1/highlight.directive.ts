import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('bold');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(fontWeight: string) {
        this.el.nativeElement.style.fontWeight = fontWeight;
    }
}
