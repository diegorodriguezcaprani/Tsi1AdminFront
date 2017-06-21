import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Sensor } from 'app/model/sensor';
import { Valor } from 'app/model/valor';
import { Motivo } from 'app/model/motivo';
import { ComentarioPanel } from 'app/model/comentarioPanel';
/**
 * Service for notify and subscribe to events.
 */


@Injectable()
export class SensorService {
    private baseUrl: string = 'http://proyectotsi1.azurewebsites.net/api/Sensores';
    private baseUrlValores: string = 'http://tareatsi1ciudad1.azurewebsites.net/api/Valores/';
    private baseUrlMotivos: string = 'http://tareatsi1ciudad1.azurewebsites.net/api/Motivos/';
    constructor(private http: Http) {
        console.log('constructor');
    }

    public addSensor(sensor: Sensor) : any{
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.post(this.baseUrl, sensor, options)
    }

    public editSensor() {
     
    }

    public getMotivos() {
        return this.http.get(this.baseUrlMotivos).map(res => <Motivo[]>res.json() as Motivo[]);
    }

    public enviarMotivos(comentario: ComentarioPanel) {
        console.log('envio comentario: ',comentario)
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrlMotivos+'Notificar', comentario, options)
    }


    public getValoresImagenes() {
        return this.http.get(this.baseUrlValores+"Imagenes").map(res => <Valor[]>res.json() as Valor[]);
    }

    public getSensores(): Observable<Sensor[]> {
        return this.http.get(this.baseUrl).map(res => <Sensor[]>res.json() as Sensor[]);
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
