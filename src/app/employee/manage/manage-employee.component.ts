import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
    selector: 'tsi1-manage-employee',
    templateUrl: 'manage-employee.component.html',
    styleUrls: [ 'manage-employee.component.css'],
    moduleId: module.id
})
export class ManageEmployeeComponent {
    tipos = ['Full time empleado', 'Part time empleado'];
    model = new Employee(6,'Prueba5',1,new Date('26/06/2008'));

    submitted = false;

    constructor(private employeeService: EmployeeService) {
       
    }
    onSubmit() {
        this.submitted = true;
        this.employeeService.addEmployee(this.model).subscribe();
        console.log('Salgo de constructor manage');
    }

    

}
