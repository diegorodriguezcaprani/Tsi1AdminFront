﻿import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { ReporteSensor } from "app/model/reporte-sensor";
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { GeneralService } from 'app/utils/general-service.service';
import { Ciudad } from 'app/model/ciudad';

@Injectable()
export class ReportesService {
    private tiposUrl: string = 'http://proyectotsi1.azurewebsites.net/api/Tipos';
    private reportUrl: string = 'http://tareatsi1ciudad1.azurewebsites.net/api/Reportes';
    private city: Ciudad;

    constructor(private http: Http, private general: GeneralService) {
        console.log('constructor service');
        this.city = general.getCity();
        this.tiposUrl = this.city.url + 'Tipos';
        this.reportUrl = this.city.url + 'Reportes';
  }
  
  public getReportesValuesBySensor(fechaIni: string, fechaFin: string): Observable<ReporteSensor[]> {
      let params: URLSearchParams = new URLSearchParams();
      //console.log("Llamo con fecha inicial: "+ fechaIni);
      //console.log("Llamo con fecha final: "+ fechaFin);
  //fecha1=2017-4-1&fecha2=2017-5-1
      params.set('fecha1', fechaIni);
      params.set('fecha2', fechaFin);
      console.log(" llame a servicio de reporte values");
      return this.http.get(this.reportUrl+'/Eventos', { search: params }).map(res => <ReporteSensor[]> res.json() as ReporteSensor[]);
      //return this.http.get(this.reportUrl,{ search: params }).map(res => <ReporteSensor[]> res.json() as ReporteSensor[]);
  }
  
  public getReportesCantValuesByTypeSensor(fechaIni: string, fechaFin: string): Observable<ReporteSensor[]> {
      let params: URLSearchParams = new URLSearchParams();
      params.set('fechaIni', fechaIni);
      params.set('fechaFin', fechaFin);
      console.log(" llame a servicio de reporte types");
      return this.http.get(this.reportUrl+'/Eventos', { search: params }).map(res => <ReporteSensor[]>res.json() as ReporteSensor[]);
  }
}
