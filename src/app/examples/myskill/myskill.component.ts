import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.services';

@Component({
    selector: 'profile-myskill',
    templateUrl: './myskill.component.html',
    styleUrls: ['./myskill.component.scss']
})
export class MyskillComponent implements OnInit {
public userDetails:any;
     constructor(
       userService: ConfigService
    ) {
     this.userDetails = userService.getUserDetails();
    }
    ngOnInit() {}
}
