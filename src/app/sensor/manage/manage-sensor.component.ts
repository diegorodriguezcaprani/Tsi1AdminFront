import { Component } from '@angular/core';
import { Sensor } from 'app/model/sensor';
import { Evento } from 'app/model/evento';
import { SensorService } from '../sensor.service';
import { TipoSensor } from 'app/tipoSensor/tipoSensor';
import { TipoSensorService } from 'app/tipoSensor/tipoSensor.service';
import { Router } from '@angular/router';
@Component({
    selector: 'manage-sensor',
    templateUrl: 'manage-sensor.component.html',
    styleUrls: [ 'manage-sensor.component.css'],
    moduleId: module.id
})
export class ManageSensorComponent {
    model = new Sensor(0, 0, '', 0, 0);
    tipos: TipoSensor[];
    lat: any;
    long: any;
    EventoSeleccionado: Evento;
    submitted = false;

    constructor(private sensorService: SensorService, private tipoSensorService: TipoSensorService, private router:Router) {
        this.tipoSensorService.getTipoSensor().subscribe((value: TipoSensor[]) => {
            this.tipos = value;
        });
        this.model.Longitud = -32;
        this.model.Latitud = -56;
    }
    
    onSubmit() {
        this.submitted = true;
        this.sensorService.addSensor(this.model).subscribe();
        this.router.navigate(['/home']);
    }

    public mapClicked($event) {
        console.log('map clicked');
        this.model.Latitud = $event.coords.lat;
        this.model.Longitud = $event.coords.lng;
    }
}
