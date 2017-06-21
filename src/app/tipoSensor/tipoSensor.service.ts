import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import { TipoSensor } from '../tipoSensor/tipoSensor';
import { GeneralService } from 'app/utils/general-service.service';
import { Ciudad } from 'app/model/ciudad';
/**
 * Service for notify and subscribe to events.
 */


@Injectable()
export class TipoSensorService {
    private baseUrl: string = 'http://proyectotsi1.azurewebsites.net/api/Tipos';
    constructor(private http: Http, private general: GeneralService) {
        console.log('constructor');
        this.baseUrl = this.general.getCity().url + 'Tipos';
    }

    public addTipoSensor(tipoSensor: TipoSensor): any{
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            console.log('hago el new' + tipoSensor.Nombre + tipoSensor + tipoSensor.TipoDato);
            return this.http.post(this.baseUrl, tipoSensor, options);
    }

    public editEmployee() {
     
    }

    public getTipoSensor(): Observable<TipoSensor[]> {
        return this.http.get(this.baseUrl).map(res => <TipoSensor[]>res.json() as TipoSensor[]);
    }

    public getEmpleados(): TipoSensor[] {
        var empleados: TipoSensor[];
        console.log('get empleados');
        this.http.get('http://proyectotsi1.azurewebsites.net/api/Tipos')
            .map(res => <TipoSensor[]>res.json() as TipoSensor[])
            .subscribe(data => {
                empleados = data
            });
        console.log(empleados);
        return empleados;
    }

    getEmployees2(): TipoSensor[] {
        var empleados: TipoSensor[];
        console.log('get empleados2');
        this.http.get('http://localhost:56477/api/Employees').subscribe((value: Response) => {
            console.log(value);
            empleados = value.json();
        });
        console.log(empleados);
        return empleados;
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

}
