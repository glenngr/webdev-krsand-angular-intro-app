import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-toolbar-right',
    template: `<ng-content></ng-content>`
})

export class AppToolbarRightComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
