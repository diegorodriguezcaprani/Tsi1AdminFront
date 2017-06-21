import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Evento } from 'app/model/evento';
import { EventoSubscripcion } from 'app/model/evento-subscripcion';
import { GeneralService } from 'app/utils/general-service.service';
import { Ciudad } from 'app/model/ciudad';
import { HistoricoEvento } from 'app/model/historico-evento';

/**
 * Service for notify and subscribe to events.
 */


@Injectable()
export class EventoService {
    private baseUrl: string ;
    private subscripciones: string;

    constructor(private http: Http, private general: GeneralService) {
        console.log('constructor service');
        let city: Ciudad = general.getCity();
        console.log('url ciudad: ', city.url);
        this.baseUrl = city.url + 'Eventos';
        this.subscripciones = city.url + 'Subscripciones';
    }



    public addEvento(evento: Evento): any{
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            console.log(evento);
            return this.http.post(this.baseUrl+'/Simple', evento, options)
    }

    public addEventoComplejo(pnombre:string,peventos: Evento[],poperador:string): any {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("creo ",  pnombre);
        return this.http.post(this.baseUrl, { nombre: pnombre, eventos: peventos, operador: poperador }, options)
    }

    public subscribirseEvento(subs: EventoSubscripcion) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.subscripciones, subs, options);
    }

    public editEvento() {
     
    }

    public getEventos(): Observable<Evento[]> {
        return this.http.get(this.baseUrl).map(res => <Evento[]>res.json() as Evento[]);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

    public getHistorico(): Observable<HistoricoEvento[]> {
        return this.http.get('http://tareatsi1ciudad1.azurewebsites.net/api' + '/HistoricoEventos').map(res => <HistoricoEvento[]>res.json() as HistoricoEvento[]);
    }

}
