import { Component, OnInit } from '@angular/core';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reports-containter',
  templateUrl: './reports-containter.component.html',
  styleUrls: ['./reports-containter.component.css']
})
export class ReportsContainterComponent implements OnInit {

    private myFormStart: FormGroup;
    private myFormEnd: FormGroup;
    private isSeleccionado: boolean;
    private isCargado: boolean;
    private opcionType0: boolean = false;
    private opcionType1: boolean = false;
    private opcionType2: boolean = false;
    private elegirFecha: boolean = false;
    reporte: number;
    opcionReportes = new  Array<typeReporte>();

    //Initialized to specific date (09.10.2018).
    public modelStart: fecha = {date: { year: 2017, month: 1, day: 1 }};
    public modelEnd: fecha = {date: { year: 2017, month: 6, day: 30 }};

  constructor(private formBuilder: FormBuilder) {
      this.opcionReportes.push(new typeReporte(0,"Reporte de eventos en el tiempo"));
      this.opcionReportes.push(new typeReporte(1, "Reporte por tipos de eventos"));
      this.opcionReportes.push(new typeReporte(2, "Reporte histórico de eventos"));
      //this.opcionReportes.push(new typeReporte(2,"Reporte de eventos por zona geográfica"));
   }
  
  ngOnInit() {
      this.isCargado = false;
      this.isSeleccionado = false;
      this.myFormStart = this.formBuilder.group({
          // Empty string or null means no initial value. Can be also specific date for
          // example: {date: {year: 2018, month: 10, day: 9}} which sets this date to initial
          // value.
          myDate: [null, Validators.required]
          // other controls are here...
      });
      this.myFormEnd = this.formBuilder.group({
          // Empty string or null means no initial value. Can be also specific date for
          // example: {date: {year: 2018, month: 10, day: 9}} which sets this date to initial
          // value.
          myDate: [null, Validators.required]
          // other controls are here...
      });
      this.setDate(this.myFormStart);
      this.setDate(this.myFormEnd);
  }
  
  setDate(form: FormGroup): void {
      // Set today date using the setValue function
      let date = new Date();
      form.setValue({myDate: {
      date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()}
      }});
  }

  clearDate(form: FormGroup): void {
      // Clear the date using the setValue function
      form.setValue({myDate: null});
  }
  
  private myDatePickerOptions: IMyDpOptions = {
          dateFormat: 'dd/mm/yyyy',
  };
  
  public mostrar(){
      this.isSeleccionado = true;
      this.opcionType0 = this.reporte == 0;
      this.opcionType1 = this.reporte == 1;
      this.opcionType2 = this.reporte == 2;
      this.isCargado = true;
      //console.log(this.modelStart.date.day+"/"+this.modelStart.date.month+"/"+this.modelStart.date.year);
      //console.log(this.modelEnd.date.day+"/"+this.modelEnd.date.month+"/"+this.modelEnd.date.year);
  }
  
  cargarGrafico(): boolean{
      //console.log("Cargar: ",this.isSeleccionado && this.isCargado);
      //console.log("Datos: ", this.modelStart, this.modelEnd);
      return (this.isSeleccionado && this.isCargado);
  }

  mostrar0(): boolean{
    return (this.cargarGrafico() && this.opcionType0);
  }

  mostrar1(): boolean{
    return (this.cargarGrafico() && this.opcionType1);
  }

  mostrar2(): boolean{
    return (this.isSeleccionado && this.opcionType2);
  }

  seleccionar(){
        this.isSeleccionado = true;
        this.opcionType0 = this.reporte == 0;
        this.opcionType1 = this.reporte == 1;
        this.opcionType2 = this.reporte == 2;
        if ((this.opcionType0) || (this.opcionType1)){
            this.elegirFecha = true;
        }
        else{
            this.elegirFecha = false;
        }
  }

  elegirDate(): boolean {
      return this.elegirFecha;
  }
  
}

class typeReporte{
    constructor(public id: number, public tipo: string){

    }
}

 interface fecha{
     date: { year: number, month: number, day: number }
}
