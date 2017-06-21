import { Component, EventEmitter, Output } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.isLogged()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    public isLogged(): boolean {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        } else {
            return false;
        }
    }

}


