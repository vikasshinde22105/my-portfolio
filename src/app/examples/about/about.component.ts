import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.services';

@Component({
    selector: 'profile-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    public userDetails:any;
     constructor(
       userService: ConfigService
    ) {
     this.userDetails = userService.getUserDetails();
    }

    ngOnInit() {}
}
