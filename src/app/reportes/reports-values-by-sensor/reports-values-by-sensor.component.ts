import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ReportesService } from 'app/reportes/reportes.service';
import { TipoSensorService } from 'app/tipoSensor/tipoSensor.service';
import { TipoSensor } from "app/tipoSensor/tipoSensor";
import { ReporteSensor } from "app/model/reporte-sensor";

@Component({
  selector: 'app-reports-values-by-sensor',
  templateUrl: './reports-values-by-sensor.component.html',
  styleUrls: ['./reports-values-by-sensor.component.css']
})
export class ReportsValuesBySensorComponent implements OnInit, OnChanges {

    @Input() dateStart: fecha;
    @Input() dateEnd: fecha;
    
    private cargado: boolean = false;
    private reportSensor = new Array<ReporteSensor>();
    private tiposSensores = new Array<TipoSensor>();
    private cant_tipos: number;
    public lineChartLabels: string[] = new Array<string>();
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [];
    public cant_meses: number = 0;
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    // lineChart
    public lineChartData= new  Array<values>();
    /*public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
    ];*/
    
    constructor(private reportService: ReportesService, private tipoSensorService: TipoSensorService) {
        this.tipoSensorService.getTipoSensor().subscribe((value: TipoSensor[]) => {
           this.tiposSensores = value;
           
           for(let v of value){
               this.lineChartData.push(new values(new Array<number>(),new String().valueOf())); 
           }
           //console.log("Cargue datos",this.lineChartData);
        });
    }

    ngOnInit() {
        this.lineChartLabels = [];
        this.setLabels();
        this.getDatos();
        
    }
    
    ngOnChanges(){
        this.lineChartLabels = [];
        this.setLabels();
        //this.getDatos();
    }

    estaCargado(){
        return this.cargado;
    }


    public getDatos(){
        this.tipoSensorService.getTipoSensor().subscribe((value: TipoSensor[]) => {
            this.tiposSensores = value;
            //console.log(' tipos de sensores:', this.tiposSensores);
            this.cant_tipos = value.length;
            let param = this.dateStart.date.year+"-"+this.dateStart.date.month+"-"+this.dateStart.date.day;
            let param1 = this.dateEnd.date.year+"-"+this.dateEnd.date.month+"-"+this.dateEnd.date.day;
            this.reportService.getReportesValuesBySensor(param,param1).subscribe((report: ReporteSensor[]) => {
                    this.reportSensor = report;
                    //console.log(" reportes sensor: ", report);
                    this.setData();
                    //console.log(" get datos dio:",this.lineChartData);
            });
            
        });
        
    }
    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
    
    setLabels(){
        let idmesStart: number;
        let anioStart: number;
        let idmesEnd: number;
        let anioEnd: number;
    
        idmesStart = this.dateStart.date.month;
        idmesEnd = this.dateEnd.date.month;
        anioStart = this.dateStart.date.year;
        anioEnd = this.dateEnd.date.year;
        if (anioStart == anioEnd){
            for (var i=idmesStart;i<=idmesEnd;i++){
                this.lineChartLabels.push(i+"/"+anioEnd);
            }
            this.cant_meses = idmesEnd - idmesStart + 1;
            //console.log("Cantidad de meses son: "+this.cant_meses);
        }
        else{
            for (var i=idmesStart;i<=12;i++){
                this.lineChartLabels.push(i+"/"+anioStart);
                //console.log("Primer for// "+i+"/"+anioStart);
            }
            for(var j = anioStart; j < (anioEnd-1);j++){
                for (var i=1;i<=12;i++){
                    let anio = j+1;
                    this.lineChartLabels.push(i+"/"+j);
                    //console.log("Segundo for// "+i+"/"+j);
                }
            }
            for (var i=1;i<=idmesEnd;i++){
                this.lineChartLabels.push(i+"/"+anioEnd);
                //console.log("Tercer for// "+i+"/"+anioEnd);
            }
            
            if (anioEnd - anioStart == 1){
                this.cant_meses = idmesEnd + (12 - idmesStart);
                //console.log("Cantidad de meses son: "+this.cant_meses);
            }
            else{
                this.cant_meses = idmesEnd + 12*(anioEnd - anioStart - 1) + (12 - idmesStart);
                //console.log("Cantidad de meses son: "+this.cant_meses);
            }
        }
    }
    
    getDataFor(tipo: Number, idmes: number, reportes: ReporteSensor[]): number{
        for (let v of reportes) {
            //console.log("Cantidad para ",tipo,idmes,this.reportSensor[i].TipoSensorId),this.reportSensor[i].mes;
            //console.log(' largo respuestas' ,this.reportSensor.length,reportes[i].cantidad)
            //console.log(' reportMes-mes',v.mes,idmes);
            //console.log(' reportTipo-tipo',v.TipoSensorId,tipo);
            //console.log(' su cantidad es:', v.cantidad);
            if ((v.mes == idmes)&&(v.TipoSensorId == tipo)){
                //console.log(" retorne cantidad",this.reportSensor[i].cantidad);
                //console.log(' salgo del for por cond');
                return v.cantidad;
            }
        }
        
        return 0;
        
    }
    
    setData(){
        //this.lineChartData = new Array(this.cant_tipos);
        //console.log('Cantidad de tipos:',this.cant_tipos);
        for (let i = 0; i < this.cant_tipos; i++) {
          //this.lineChartData[i] = new values(new Array<number>(),this.tiposSensores[i].Nombre);
          // console.log("cantidad de meses:",this.cant_meses);
          for (let j = 0; j < this.cant_meses; j++) {
              //console.log("Llamo con: ",this.tiposSensores[i].Id,j+1);
              //console.log("El mes es:",(j%12)+1);
              //this.lineChartData[i].data[j]= this.getDataFor(this.tiposSensores[i].Id, (j%12)+1, this.reportSensor);
              this.lineChartData[i].data.push(this.getDataFor(this.tiposSensores[i].Id, (j%12)+1, this.reportSensor));
          }
          this.lineChartData[i].label = this.tiposSensores[i].Nombre;
        }
        this.cargado = true;
    }
    
}

class values{
    constructor(public data: number[],public label: string){};
    
    getData(): number[]{
        return this.data;
    }
}

interface fecha{
    date: { year: number, month: number, day: number }
}
