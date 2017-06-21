import { Component } from '@angular/core';
import { TipoSensorService } from '../tipoSensor.service';
import { TipoSensor } from '../tipoSensor';
import { Http, Response } from '@angular/http';
@Component({
    selector: 'tipoSensor-list',
    templateUrl: 'tipoSensor-list.component.html',
    styleUrls: [ 'tipoSensor-list.component.css'],
    moduleId: module.id
})
export class TipoSensorListComponent {
    public tiposSensores: TipoSensor[];

    constructor(private tipoSensorService: TipoSensorService) {
        this.tipoSensorService.getTipoSensor().subscribe((value: TipoSensor[]) => {
            this.tiposSensores = value;
        });
        console.log('Salgo de constructor');
    }

    ngOnInit() {
        // en el momento de la suscripción es cuando se dispara la llamada
        //this.employeeService
        //    .getEmployees()
        //    .subscribe(resultado => this.employees = resultado);
        
    }



}
