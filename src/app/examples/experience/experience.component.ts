import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.services';

@Component({
    selector: 'profile-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    constructor() { }

    ngOnInit() {}
}
