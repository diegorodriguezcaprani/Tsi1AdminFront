import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Ciudad } from '../model/ciudad';
/**
 * Service for notify and subscribe to events.
 */


@Injectable()
export class CiudadService {
    private baseUrl: string = 'http://adminciudad20170522061350.azurewebsites.net/api/Ciudades';

    constructor(private http: Http) {
        console.log('constructor');
    }



    public getCiudades(): Observable<Ciudad[]> {
        return this.http.get(this.baseUrl).map(res => <Ciudad[]>res.json() as Ciudad[]);
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
