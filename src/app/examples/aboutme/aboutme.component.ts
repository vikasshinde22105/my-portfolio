import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.services';

@Component({
    selector: 'profile-aboutme',
    templateUrl: './aboutme.component.html',
    styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
    public userDetails: any;

    constructor(
       userService: ConfigService
    ) {
     this.userDetails = userService.getUserDetails();
    }

    ngOnInit() {}
}
