import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FacebookService, InitParams } from 'ngx-facebook';
import { SharedService } from "./utils/shared-service";

declare var Pusher: any;


@Component({
    selector: 'tsi1',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css'],
    moduleId: module.id
})
export class AppComponent {
    pusher: any;
    channels: any;

    constructor(private fb: FacebookService, private _sharedService: SharedService, private router:Router) {
        let initParams: InitParams = {
            appId: '788988281256941',
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(initParams);
    }



    public isLogged(): boolean {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        } else {
            return false;
        }
    }

    public crearPusher() {
        this.pusher = new Pusher('6e63ad3e4d4ab9070643');
        this.channels = [];
    }
}
