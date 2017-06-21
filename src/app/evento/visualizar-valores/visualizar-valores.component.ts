import { Component, OnInit } from '@angular/core';
import { SensorService } from 'app/sensor/sensor.service';
import { Valor } from 'app/model/valor';
import { Motivo } from 'app/model/motivo';
import { ComentarioPanel } from 'app/model/comentarioPanel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-visualizar-valores',
  templateUrl: './visualizar-valores.component.html',
  styleUrls: ['./visualizar-valores.component.css']
})
export class VisualizarValoresComponent implements OnInit {

    constructor(private sensorService: SensorService, private router:Router) { }
     valores = new Array<Valor>();
     imagenes = new Array<String>();
     imagenActual: String;
     indexActual: number;
     motivos = new Array<Motivo>();
     motivoSeleccionado: Motivo;
     comentario: string;
    ngOnInit() {
        this.sensorService.getValoresImagenes().subscribe((value: Valor[]) => {
            this.valores = value;
            let primero: boolean = true;
            for (let entry of value) {
                if (primero) {
                    this.indexActual = 1;
                    this.imagenActual = entry.Imagen;
                    primero = !primero;
                }
                this.imagenes.push(entry.Imagen);
            }
        });
        this.sensorService.getMotivos().subscribe((value: Motivo[]) => {
            this.motivos = value;
        })
    }

    public siguiente() {
        this.indexActual = (this.indexActual +1)  % this.imagenes.length;
        this.imagenActual = this.imagenes[this.indexActual];
    }
    public anterior() {
        this.indexActual = (this.indexActual - 1) % this.imagenes.length;
        if (this.indexActual = 0) { this.indexActual + 1 }
        this.imagenActual = this.imagenes[this.indexActual];
    }

    public enviar() {
        let comentario = new ComentarioPanel(this.motivoSeleccionado.MotivoId, this.valores[this.indexActual].Id_Sensor, this.comentario);
        this.sensorService.enviarMotivos(comentario).subscribe();
        this.router.navigate(['/home']);
    }
}
