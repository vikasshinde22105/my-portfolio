import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.services';

@Component({
    selector: 'profile-mywork',
    templateUrl: './mywork.component.html',
    styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    constructor() { }

    ngOnInit() {}
}
