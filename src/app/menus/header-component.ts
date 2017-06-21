import { Component, EventEmitter, Output, DoCheck } from '@angular/core';
import { Http, Response } from '@angular/http';
import { GeneralService } from 'app/utils/general-service.service';
import { Usuario } from 'app/model/usuario';
import { Ciudad } from 'app/model/ciudad';
import { Router } from "@angular/router";

@Component({
    selector: 'header-component',
    templateUrl: 'header-view.component.html',
    styleUrls: ['header-view.component.css'],
    moduleId: module.id
})
export class HeaderComponent implements DoCheck {
    @Output() menuPressedChange = new EventEmitter();
     user: Usuario;
     city: Ciudad;
    public options = {
        position: ["bottom", "right"],
        timeOut: 5000,
        lastOnBottom: false,
        showProgressBar: true,
        pauseOnHover: true,
        preventDuplicates: true,
        preventLastDuplicates: 'visible',
        rtl: false,
        icon: 'success'

    };

    constructor(private general: GeneralService, private router:Router) {
        this.user = general.getUsuario();
        this.city = general.getCity();
    }

    menu() {

    }

    public logout() {
        localStorage.clear()
    }

    ngDoCheck() {
        this.city = this.general.getCity();
    }

    public goHome() {
        this.router.navigate(['home']);
    }
}

