import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { EmployeeListComponent } from './employee/list/employee-list.component';
import { ManageEmployeeComponent } from './employee/manage/manage-employee.component';
import { EmployeeService } from './employee/employee.service';
import { ReportsComponent } from './utils/reports-component';
import { MapsComponent } from './utils/maps-component';
import { TipoSensorListComponent } from './tipoSensor/list/tipoSensor-list.component';
import { ManageTipoSensorComponent } from './tipoSensor/manage/manage-tipoSensor.component';
import { SensorListComponent } from './sensor/list/sensor-list.component';
import { ManageSensorComponent } from './sensor/manage/manage-sensor.component';
import { EventoListComponent } from './evento/list/evento-list.component';
import { ManageEventoComponent } from './evento/manage/manage-evento.component';
import { LoginComponent } from './menus/login-component';
import { CiudadListComponent } from './ciudades/ciudad-list.component';
import { EventoComplejoListComponent } from './evento-complejo/evento-complejo-list/evento-complejo-list.component';
import { EventoSubscripcionComponent } from './evento-subscripcion/evento-subscripcion.component';
import { EventoSubscripcionManageComponent } from './evento-subscripcion/evento-subscripcion-manage/evento-subscripcion-manage.component';
import { ReportsContainterComponent } from './reportes/reports-containter/reports-containter.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { AuthGuardService } from 'app/menus/auth-guard.service';
import { HomeComponent } from 'app/menus/home/home.component';
import { VisualizarValoresComponent } from 'app/evento/visualizar-valores/visualizar-valores.component';
import { MapaValoresComponent } from 'app/sensor/mapa-valores/mapa-valores.component';

const routes: Routes = [
    { path: 'list', component: EmployeeListComponent, canActivate: [AuthGuardService] },
    { path: 'manage', component: ManageEmployeeComponent, canActivate: [AuthGuardService] },
    { path: 'listEvento', component: EventoListComponent, canActivate: [AuthGuardService] },
    { path: 'manageEvento', component: ManageEventoComponent, canActivate: [AuthGuardService] },
    { path: 'listTipoSensor', component: TipoSensorListComponent, canActivate: [AuthGuardService] },
    { path: 'manageTipoSensor', component: ManageTipoSensorComponent, canActivate: [AuthGuardService] },
    { path: 'listSensor', component: SensorListComponent, canActivate: [AuthGuardService] },
    { path: 'listEventoComplejo', component: EventoComplejoListComponent, canActivate: [AuthGuardService] },
    { path: 'listEventoSubscripcion', component: EventoSubscripcionComponent, canActivate: [AuthGuardService] },
    { path: 'manageEventoSubscripcion', component: EventoSubscripcionManageComponent, canActivate: [AuthGuardService] },
    { path: 'manageSensor', component: ManageSensorComponent, canActivate: [AuthGuardService] },
    { path: 'reports', component: ReportsContainterComponent, canActivate: [AuthGuardService] },
    { path: 'visualizar', component: VisualizarValoresComponent, canActivate: [AuthGuardService] },
    { path: 'chats', component: ChatListComponent, canActivate: [AuthGuardService] },
    { path: 'mapSensores', component: MapaValoresComponent, canActivate: [AuthGuardService] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: 'ciudades', component: CiudadListComponent, canActivate: [AuthGuardService] },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }, EmployeeService]
})
export class AppRoutingModule { }