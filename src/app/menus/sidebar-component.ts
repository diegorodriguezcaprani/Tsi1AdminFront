import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'sidebar-component',
    templateUrl: 'sidebar-view.component.html',
    styleUrls: ['sidebar-view.component.css'],
    moduleId: module.id
})
export class SidebarComponent implements OnInit, OnChanges {
    @Input() menuPressed;
    isClassVisible = false;

    ngOnInit() {

    }

    ngOnChanges() {
        this.showSideBar();
    }
    public showSideBar() {
        console.log("Mostrar barra");
        this.isClassVisible = !this.isClassVisible
    }
    
}

