import { Component } from '@angular/core';
import { Evento } from 'app/model/evento';
import { EventoService } from '../evento.service';
import { Routes, RouterModule, Router } from "@angular/router";
import { TipoSensorService } from 'app/tipoSensor/tipoSensor.service';
import { TipoSensor } from 'app/tipoSensor/tipoSensor';
import { Motivo } from 'app/model/motivo';
import { SensorService } from 'app/sensor/sensor.service';
@Component({
    selector: 'manage-evento',
    templateUrl: 'manage-evento.component.html',
    styleUrls: [ 'manage-evento.component.css'],
    moduleId: module.id
})
export class ManageEventoComponent {
    model = new Evento(0, '', '', '', '', 0,false,0);
    tiposDato = new Array<TipoSensor>();
    motivos = new Array<Motivo>();
    tiposOperador = ['<', '>', '=', '<=', '>=', 'Max','Min'];
    submitted = false;

    constructor(private eventoService: EventoService, private tipoSensorService: TipoSensorService, private router:Router, private sensorService: SensorService) {
        this.tipoSensorService.getTipoSensor().subscribe((resp: TipoSensor[]) => { this.tiposDato = resp })
        this.sensorService.getMotivos().subscribe((resp: Motivo[]) => { this.motivos = resp });
    }
    
    onSubmit() {
        this.submitted = true;
        console.log('hago post con ', this.model);
        this.eventoService.addEvento(this.model).subscribe();
        console.log('Salgo de onSubmit manage');
        this.router.navigate(['/home']);
        
    }
}
