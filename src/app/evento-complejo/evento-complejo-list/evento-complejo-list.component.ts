import { Component, OnInit } from '@angular/core';
import { Evento } from 'app/model/evento';
import { EventoService } from 'app/evento/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-complejo-list',
  templateUrl: './evento-complejo-list.component.html',
  styleUrls: ['./evento-complejo-list.component.css']
})
export class EventoComplejoListComponent implements OnInit {
    eventosSimples = new Array<Evento>();
    seleccionados = new Array<Evento>();
    model = new Evento(0, '', '', '', '', 0,false,0);


    constructor(private eventoService: EventoService, private router:Router) { }

  ngOnInit() {
      this.eventoService.getEventos().subscribe((value: Evento[]) => {
          this.eventosSimples = value;
      });
      console.log('Salgo de on init');
  }
  public agregar(evento:Evento) {
      let index: number = this.eventosSimples.indexOf(evento);
      if (index !== -1) {
          this.eventosSimples.splice(index, 1);
      }
      this.seleccionados.push(evento);
      console.log(this.seleccionados.length)
  }

  public confirmarOr() {
      this.eventoService.addEventoComplejo("evento complejo", this.seleccionados, "OR");
      this.router.navigate(['/home']);
  }

  public confirmarAnd() {
      this.eventoService.addEventoComplejo("evento complejo", this.seleccionados, "OR");
      this.router.navigate(['/home']);
  }
}
