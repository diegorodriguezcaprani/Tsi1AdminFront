import { Component } from '@angular/core';
import { EventoService } from '../evento.service';
import { Evento } from 'app/model/evento';
import { Http, Response } from '@angular/http';
@Component({
    selector: 'evento-list',
    templateUrl: 'evento-list.component.html',
    styleUrls: [ 'evento-list.component.css'],
    moduleId: module.id
})
export class EventoListComponent {
    public eventos: Evento[];
    constructor(private eventoService: EventoService) {
        this.eventoService.getEventos().subscribe((value: Evento[]) => {
            this.eventos = value;
        });
        console.log('Salgo de constructor');
    }

    ngOnInit() {
        // dif con contrucctor aca ya tenes los inputs en el constructor no
    }

    public Subscribirse(evento: Evento) {

    }

}
