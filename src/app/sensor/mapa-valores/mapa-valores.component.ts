import { Component, OnInit, ElementRef, Renderer, ViewChild } from '@angular/core';
import { SensorService } from 'app/sensor/sensor.service';
import { Sensor } from 'app/model/sensor';
import { AgmInfoWindow } from '@agm/core';

@Component({
  selector: 'app-mapa-valores',
  templateUrl: './mapa-valores.component.html',
  styleUrls: ['./mapa-valores.component.css']
})
export class MapaValoresComponent implements OnInit {
    title: string = 'Prueba mapa';
    lat: number = -34.890359;
    lng: number = -56.184255;
    zoom: number = 10;
    radio: number = 5000;
    markers = new Array<marker>();
    mensajes = new Array<AgmInfoWindow>();
    @ViewChild('marcadores') someDivs;

  constructor(private sensorService:SensorService) { }
    
  ngOnInit() {
      this.sensorService.getSensores().subscribe((value: Sensor[]) => {
          this.markers = value.map((sensor: Sensor) => ({ lat: sensor.Latitud, lng: sensor.Longitud, label: sensor.Descripcion, draggable: false })
          )
      });
      //this.someDivs[1].toArray()[0].nativeElement.classList.add('isActive');
  }
  

  public clickedMarker(label: string, index: number) {
      //#marca1.open();
  }

  public mapClicked(event : any) {

  }

}


export class marker {
    constructor(
        lat: Number,
        lng: Number,
        label: String,
        draggable: Boolean
    ) { }
}