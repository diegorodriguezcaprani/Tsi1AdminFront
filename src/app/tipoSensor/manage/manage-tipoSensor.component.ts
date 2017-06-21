import { Component } from '@angular/core';
import { TipoSensor } from '../tipoSensor';
import { TipoSensorService } from '../tipoSensor.service';

@Component({
    selector: 'manage-tipoSensor',
    templateUrl: 'manage-tipoSensor.component.html',
    styleUrls: [ 'manage-tipoSensor.component.css'],
    moduleId: module.id
})
export class ManageTipoSensorComponent {
    tipos = ['Character', 'String', 'Img', 'Float', 'Int'];
    model = new TipoSensor(1,"",0,"");
    submitted = false;



    constructor(private tipoSensorService: TipoSensorService) {
       
    }
    onSubmit() {
        this.submitted = true;
        this.tipoSensorService.addTipoSensor(this.model).subscribe();
        console.log('Salgo de constructor manage');
    }

    

}
