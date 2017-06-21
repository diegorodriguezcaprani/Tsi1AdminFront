import { Component } from '@angular/core';
import { CiudadService } from './ciudad.service';
import { Ciudad } from '../model/ciudad';
import { Http, Response } from '@angular/http';
import { SharedService } from "../utils/shared-service";
import { Router } from "@angular/router";

@Component({
    selector: 'ciudad-list',
    templateUrl: 'ciudad-list.component.html',
    styleUrls: [ 'ciudad-list.component.css'],
    moduleId: module.id
})
export class CiudadListComponent {
    public ciudades: Ciudad[];

    constructor(private ciudadService: CiudadService, private _sharedService: SharedService, private router: Router) {
        this.ciudadService.getCiudades().subscribe((value: Ciudad[]) => {
            this.ciudades = value;
        });
        console.log('Salgo de constructor');
    }

    ngOnInit() {
        // dif con contrucctor aca ya tenes los inputs en el constructor no
    }
    seleccionarCiudad(ciudad: Ciudad) {
        localStorage.setItem('currentCity', JSON.stringify(ciudad));
        this.router.navigate(['home']);
    }


}
