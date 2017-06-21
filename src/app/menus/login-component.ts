import { Component, EventEmitter, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FacebookService, LoginResponse } from 'ngx-facebook';
import { Router } from "@angular/router";
import { SharedService } from "../utils/shared-service";
import { GeneralService } from "app/utils/general-service.service";

@Component({
    selector: 'login-component',
    templateUrl: 'login-view.component.html',
    styleUrls: ['login-view.component.css'],
    moduleId: module.id
})
export class LoginComponent {
    @Output() loginChanged = new EventEmitter<boolean>();
    logeed: boolean;

    constructor(private fb: FacebookService, private _sharedService: SharedService, private router:Router, private general:GeneralService) {
        this.logeed = false
    }

    loginWithFacebook(): void {
        this.fb.login()
            .then((response: LoginResponse) => this.loginCorrect(response.authResponse))
            .catch((error: any) => console.error(error));
        
    }

    loginCorrect(response) {
        console.log('facebook respondio: ',response);
        this.general.login(response.userID, response.accessToken);
        this.router.navigate(['ciudades']);
    }

    
}

