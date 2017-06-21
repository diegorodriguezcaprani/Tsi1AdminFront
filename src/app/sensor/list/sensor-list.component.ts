import { Component } from '@angular/core';
import { SensorService } from '../sensor.service';
import { Sensor } from 'app/model/sensor';
import { Http, Response } from '@angular/http';
@Component({
    selector: 'sensores-list',
    templateUrl: 'sensor-list.component.html',
    styleUrls: [ 'sensor-list.component.css'],
    moduleId: module.id
})
export class SensorListComponent {
    public sensores: Sensor[];
    constructor(private sensorService: SensorService) {
        this.sensorService.getSensores().subscribe((value: Sensor[]) => {
            this.sensores = value;
        });
        console.log('Salgo de constructor');
    }

    ngOnInit() {
        // dif con contrucctor aca ya tenes los inputs en el constructor no
    }



}
