import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/list/employee-list.component';
import { ManageEmployeeComponent } from './employee/manage/manage-employee.component';
import { EmployeeService } from './employee/employee.service';
import { ReportsComponent } from './utils/reports-component';
import { MapsComponent } from './utils/maps-component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core/core.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HeaderComponent } from './menus/header-component';
import { LoginComponent } from './menus/login-component';
import { SidebarComponent } from './menus/sidebar-component';
import { SensorListComponent } from './sensor/list/sensor-list.component';
import { ManageSensorComponent } from './sensor/manage/manage-sensor.component';
import { SensorService } from './sensor/sensor.service';
import { TipoSensorListComponent } from './tipoSensor/list/tipoSensor-list.component';
import { ManageTipoSensorComponent } from './tipoSensor/manage/manage-tipoSensor.component';
import { TipoSensorService } from './tipoSensor/tipoSensor.service';
import { EventoService } from './evento/evento.service';
import { ManageEventoComponent } from './evento/manage/manage-evento.component';
import { EventoListComponent } from './evento/list/evento-list.component';
import { SubscriptionContainerComponent } from './pusher/subscriptionContainer.component';
import { SubscriptionComponent } from './pusher/subscription.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { FacebookModule } from 'ngx-facebook';
import { SharedService } from './utils/shared-service';
import { CiudadListComponent } from './ciudades/ciudad-list.component';
import { CiudadService } from './ciudades/ciudad.service';
import { EventoComplejoListComponent } from './evento-complejo/evento-complejo-list/evento-complejo-list.component';
import { EventoComplejoManageComponent } from './evento-complejo/evento-complejo-manage/evento-complejo-manage.component';
import { EventoSubscripcionComponent } from './evento-subscripcion/evento-subscripcion.component';
import { EventoSubscripcionManageComponent } from './evento-subscripcion/evento-subscripcion-manage/evento-subscripcion-manage.component';
import { GeneralService } from './utils/general-service.service';
import { ReportsContainterComponent } from './reportes/reports-containter/reports-containter.component';
import { ReportsValuesBySensorComponent } from './reportes/reports-values-by-sensor/reports-values-by-sensor.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { ChatComponent } from './chat/chat/chat.component';
import { ChatService } from './chat/chat.service';
import { ManageChatComponent } from './chat/manage-chat/manage-chat.component';
import { AuthGuardService } from 'app/menus/auth-guard.service';
import { HomeComponent } from './menus/home/home.component';
import { VisualizarValoresComponent } from './evento/visualizar-valores/visualizar-valores.component';
import { MapaValoresComponent } from './sensor/mapa-valores/mapa-valores.component';

import { MyDatePickerModule } from 'mydatepicker';
import { ReportsCantValuesByTypeSensorComponent } from './reportes/reports-cant-values-by-type-sensor/reports-cant-values-by-type-sensor.component';
import { ReportesService } from './reportes/reportes.service';
import { ReportsHistoricsComponent } from './reportes/reports-historics/reports-historics.component';

@NgModule({
    imports: [MyDatePickerModule, BrowserModule,
        AppRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        SimpleNotificationsModule.forRoot(),
        ChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCi5iP63vmogpjePHFKjIaiXQqZRwb9BNc'
        }),
        FacebookModule.forRoot()
       ], // imports all the modules you will use in your main module
    declarations: [AppComponent, EmployeeListComponent, ManageEmployeeComponent, ReportsComponent,
        MapsComponent, HeaderComponent, LoginComponent, SidebarComponent, SensorListComponent, ManageSensorComponent,
        TipoSensorListComponent, ManageTipoSensorComponent, ManageEventoComponent, EventoListComponent,
        SubscriptionContainerComponent, SubscriptionComponent, CiudadListComponent, EventoComplejoListComponent, EventoComplejoManageComponent, EventoSubscripcionComponent, EventoSubscripcionManageComponent, ReportsContainterComponent, ReportsValuesBySensorComponent, ChatListComponent, ChatComponent, ManageChatComponent, HomeComponent, VisualizarValoresComponent, MapaValoresComponent, ReportsCantValuesByTypeSensorComponent, ReportsHistoricsComponent,], // declare the componentes that will be part of the modules
    providers: [EmployeeService, SensorService, TipoSensorService, EventoService, SharedService, CiudadService, GeneralService, ChatService, AuthGuardService, ReportesService  ], //declare the services you will have available for all componentes in your module
    bootstrap: [AppComponent]
})
export class AppModule { }
