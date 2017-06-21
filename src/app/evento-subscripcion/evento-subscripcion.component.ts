import { Component, OnInit } from '@angular/core';
import { Evento } from 'app/model/evento';
import { EventoService } from 'app/evento/evento.service';


@Component({
  selector: 'app-evento-subscripcion',
  templateUrl: './evento-subscripcion.component.html',
  styleUrls: ['./evento-subscripcion.component.css']
})
export class EventoSubscripcionComponent implements OnInit {

    public eventos: Evento[];
    constructor(private eventoService: EventoService) {
        this.eventoService.getEventos().subscribe((value: Evento[]) => {
            this.eventos = value;
        });
        console.log('Salgo de constructor');
    }
  ngOnInit() {
  }

}
