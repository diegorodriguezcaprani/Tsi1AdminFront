import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'app/utils/general-service.service';
import { Usuario } from 'app/model/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    cargado: boolean =false;
    usuarios = new Array<Usuario>();

  constructor(private router:Router, private usuarioService: GeneralService) { 
      this.usuarioService.getUsuarios().subscribe((value: Usuario[]) => {
            this.usuarios = value;
            this.cargado = true;
        });
  }

  ngOnInit() {
  }

  public goSensores() {
      this.router.navigate(['/listSensor']);
  }

  public goVisualizar() {
      this.router.navigate(['/visualizar']);
  }


  public goEventos() {
      this.router.navigate(['/listEvento']);
  }

  public goEventosComplejos() {
      this.router.navigate(['/listEventoComplejo']);
  }

  public goChat() {
      this.router.navigate(['/chats']);
  }

  public goSubscripciones() {
      this.router.navigate(['/listEventoSubscripcion']);
  }
  public goMapa() {
      console.log("go ver mapa");
      this.router.navigate(['/mapSensores']);
  }

  public goReportes() {
      this.router.navigate(['/reports']);
  }

  estaCargado(): boolean {
    return this.cargado;
  }

}
