import { Component, OnInit } from '@angular/core';
import { Evento } from 'app/model/evento';
import { EventoService } from 'app/evento/evento.service';
import { SensorService } from 'app/sensor/sensor.service';
import { Sensor } from 'app/model/sensor';
import { EventoSubscripcion } from 'app/model/evento-subscripcion';
import { GeneralService } from 'app/utils/general-service.service';

@Component({
  selector: 'app-evento-subscripcion-manage',
  templateUrl: './evento-subscripcion-manage.component.html',
  styleUrls: ['./evento-subscripcion-manage.component.css']
})
export class EventoSubscripcionManageComponent implements OnInit {
    title: string = 'Prueba mapa';
    lat: number = -34.890359;
    lng: number = -56.184255;
    zoom: number = 10;
    radio: number=5000;
    markers = new Array<marker>(); 
    eventos = new Array<Evento>();
    EventoSeleccionado = new Evento(0,'','','','',0,false,0);

    constructor(private eventoService: EventoService, private sensorService: SensorService, private general:GeneralService) { }

    ngOnInit() {
        this.sensorService.getSensores().subscribe((value: Sensor[]) => {
            this.markers = value.map((sensor: Sensor) => ({ lat: sensor.Latitud, lng: sensor.Longitud, label: sensor.Descripcion, draggable: false })
            )
        });
        this.eventoService.getEventos().subscribe((value: Evento[]) => this.eventos = value);
        console.log('tengo estos sensores' ,this.markers)
    }


    public confirmar() {
        let user = this.general.getUsuario();
        let eventSub = new EventoSubscripcion(0, this.lat, this.lng, this.radio, this.EventoSeleccionado.EventoId, user.UsuarioId);
        console.log('me subscribo con:', eventSub);
        this.eventoService.subscribirseEvento(eventSub).subscribe();
    }

  clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${label || index}`)
      console.log(this.markers)
  }

  mapClicked($event: any) {

  }

  markerDragEnd(m: marker, $event: MouseEvent) {
      console.log('dragEnd', m, $event);
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