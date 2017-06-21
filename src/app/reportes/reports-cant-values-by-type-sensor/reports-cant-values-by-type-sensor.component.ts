import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TipoSensorService } from 'app/tipoSensor/tipoSensor.service';
import { ReportesService } from 'app/reportes/reportes.service';
import { ReporteSensor } from "app/model/reporte-sensor";
import { TipoSensor } from "app/tipoSensor/tipoSensor";

@Component({
  selector: 'app-reports-cant-values-by-type-sensor',
  templateUrl: './reports-cant-values-by-type-sensor.component.html',
  styleUrls: ['./reports-cant-values-by-type-sensor.component.css']
})
export class ReportsCantValuesByTypeSensorComponent implements OnInit, OnChanges {

  @Input() dateStart: fecha;
  @Input() dateEnd: fecha;
    
  public pieChartLabels = new Array<string>(); //['Lluvia', 'Temperatura', 'Velocidad'];
  public pieChartData = new Array<number>(); //[300, 500, 100];
  public pieChartType:string = 'pie';
  public reportSensor = new Array<ReporteSensor>();
  public tiposSensores = new Array<TipoSensor>();
  public cargado: boolean = false;

  constructor(private reportService: ReportesService, private tipoSensorService: TipoSensorService) {
        this.tipoSensorService.getTipoSensor().subscribe((value: TipoSensor[]) => {
           this.tiposSensores = value;
           
           for(let v of value){
               //this.pieChartLabels.push(v.Nombre);
               //this.pieChartData.push(10); 
           }
        });
  }

  ngOnInit() {
      this.getDatos();
  }
  
  ngOnChanges(){
      this.getDatos();
  }
  
  public getDatos(){
      this.tipoSensorService.getTipoSensor().subscribe((value: TipoSensor[]) => {
          this.tiposSensores = value;
          console.log(' tipos de sensores:', this.tiposSensores);
          let param = this.dateStart.date.year+"-"+this.dateStart.date.month+"-"+this.dateStart.date.day;
          let param1 = this.dateEnd.date.year+"-"+this.dateEnd.date.month+"-"+this.dateEnd.date.day;
          this.reportService.getReportesCantValuesByTypeSensor(param,param1).subscribe((report: ReporteSensor[]) => {
                  this.reportSensor = report;
                  console.log("reportes sensor: ", this.reportSensor);
                  this.setData();
          });
          
      });
  }
  
  getDataFor(tipo: number): number{
      for (var i=0;i < this.reportSensor.length;i++) {
          if (this.reportSensor[i].TipoSensorId == tipo){
              return this.reportSensor[i].cantidad;
          }
      }
      return 0;    
  }
  
  setData(){
      let cant_tipos = this.tiposSensores.length;
      for (let i = 0; i < cant_tipos; i++) {
          this.pieChartLabels.push(this.tiposSensores[i].Nombre);
          this.pieChartData[i] = this.getDataFor(i+1);
      }
      this.cargado = true;
  }

  estaCargado(){
        return this.cargado;
    }

  //events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}

interface fecha{
    date: { year: number, month: number, day: number }
}
