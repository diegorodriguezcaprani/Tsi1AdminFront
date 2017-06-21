import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'maps',
    templateUrl: 'maps-view.component.html',
    styleUrls: ['maps-view.component.css'],
    moduleId: module.id
})
export class MapsComponent {
    title: string = 'Prueba mapa';
    lat: number = -34.890359;
    lng: number = -56.184255;
    zoom: number = 17;

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }

    mapClicked($event: any) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    }

    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

    markers: marker[] = [
        {
            lat: -34.890469,
            lng: -56.184465,
            label: 'Temperatura1',
            draggable: true
        },
        {
            lat: -34.890679,
            lng: -56.184675,
            label: 'Temeperatura2',
            draggable: true
        },
        {
            lat: -34.890999,
            lng: -56.184985,
            label: 'Sonido1',
            draggable: true
        }
    ]

    
}




interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}