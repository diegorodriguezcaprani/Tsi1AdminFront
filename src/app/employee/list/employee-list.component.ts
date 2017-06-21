import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Http, Response } from '@angular/http';
@Component({
    selector: 'tsi1-employee-list',
    templateUrl: 'employee-list.component.html',
    styleUrls: [ 'employee-list.component.css'],
    moduleId: module.id
})
export class EmployeeListComponent {
    public employees: Employee[];
    constructor(private employeeService: EmployeeService) {
        this.employeeService.getEmployees().subscribe((value: Employee[]) => {
            this.employees = value;
        });
        console.log('Salgo de constructor');
    }

    ngOnInit() {
        // en el momento de la suscripción es cuando se dispara la llamada
        //this.employeeService
        //    .getEmployees()
        //    .subscribe(resultado => this.employees = resultado);
        
    }



}
