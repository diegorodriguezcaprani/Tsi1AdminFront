
declare var Pusher: any;
import {
    Component,
    Input,
    AfterViewChecked,
    OnInit
} from '@angular/core';
import { GeneralService } from 'app/utils/general-service.service';
import { Usuario } from 'app/model/usuario';

@Component({
    moduleId: module.id,
    selector: 'subscriptionContainer',
    template: `<div class="container" *ngIf="datosOK">
              
                        <subscription [search]="channel" [pusher]="pusher"></subscription>

                  </div>`,
    styleUrls: ['subscriptionContainer.component.css']
})
export class SubscriptionContainerComponent implements OnInit {

    private newSearchTerm: string;
    channel: any;
    pusher: any;
    pusherServer: any;
    datosOK: boolean;

    constructor(private generalService: GeneralService) {
        
    }

    public ngOnInit() {
        this.datosOK = false;
        this.channel = new Object;
        console.log("Constructor container pusher")
        this.pusher = new Pusher('6e63ad3e4d4ab9070643', {
            cluster: "mt1"
        });
        console.log("cree pusher")
        let user: Usuario = this.generalService.getUsuario();
        this.channel = { term: user.ChannelName, active: true };
        console.log('pusher va escucha: ', user.ChannelName);
        this.datosOK = true;
    }


    

}

