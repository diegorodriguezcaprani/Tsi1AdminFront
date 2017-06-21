import { Component, OnInit } from '@angular/core';
import { HistoricoEvento } from "app/model/historico-evento";
import { EventoService } from 'app/evento/evento.service';

@Component({
  selector: 'app-reports-historics',
  templateUrl: './reports-historics.component.html',
  styleUrls: ['./reports-historics.component.css']
})
export class ReportsHistoricsComponent implements OnInit {

    public historico: HistoricoEvento[];
    private cargado: boolean = false;

    constructor(private eventoService: EventoService) {
        this.eventoService.getHistorico().subscribe((value: HistoricoEvento[]) => {
            this.historico = value;
            this.cargado = true;
        });

        console.log('Salgo de constructor');
    }

    estaCargado(): boolean{
      return this.cargado;
    }

    ngOnInit() {
        // dif con contrucctor aca ya tenes los inputs en el constructor no
    }

}
