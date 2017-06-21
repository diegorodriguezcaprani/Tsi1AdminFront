
import { Router } from '@angular/router';
import {
    Component,
    Input,
    AfterViewChecked,
    OnInit,
    OnChanges,
    ChangeDetectorRef
} from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
    moduleId: module.id,
    selector: 'subscription',
    template: `
                  <ul class="container">
                    <simple-notifications [options]="options"></simple-notifications>
                  </ul>`,
    styleUrls: ['subscription.component.css']
})
export class SubscriptionComponent implements OnInit, OnChanges {
    @Input() search: any;
    @Input() pusher;
    public mensajes: Object[];
    private channel;
    private className: String;

    public ngOnInit() {
        console.log("entre a subscripcion component", this.search, this.pusher)
        this.subscribeToChannel();
        this.mensajes = [];
        this.className = this.search.term.replace(' ', '-');
        this.subscribeToChannel();
    }

    public ngOnChanges() {

    }

    private subscribeToChannel() {
        console.log("subscripcion a pusher")
        this.channel = this.pusher.subscribe(this.search.term);
        console.log("bind a channel a pusher",this.search.term)
        this.channel.bind('my-event', (data) => {
            this.newMsg(data);
        });
        console.log("bind a channel a pusher OK")
    }

    private newMsg(data: any) {
        console.log("Llego algo " + data.message);
        this._service.create('Notificacion', data.message);
        this.mensajes.push(data);
        this.ref.detectChanges();
        this.ref.detectChanges();
    }

 
 
    constructor(private _service: NotificationsService, private router: Router, private ref: ChangeDetectorRef) { }

    public options = {
        position: ["bottom", "right"],
        timeOut: 8000,
        lastOnBottom: false,
        showProgressBar: true,
        pauseOnHover: true,
        preventDuplicates: true,
        preventLastDuplicates: 'visible',
        rtl: false,
        icon: 'success'

    };

    create(text: string) {
        this._service.html(
            'Notification',
            text
        )
    }
}
