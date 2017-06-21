import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Employee } from '../employee/employee';
/**
 * Service for notify and subscribe to events.
 */


@Injectable()
export class EmployeeService {
    private baseUrl: string = 'http://localhost:56477/api/Employees';
    constructor(private http: Http) {
        console.log('constructor');
    }

    public addEmployee(employee: Employee) : Observable<Employee>{
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            return this.http.post(this.baseUrl, employee, options)
                .map(this.extractData);
    }

    public editEmployee() {
     
    }

    public getEmployees(): Observable<Employee[]> {
        return this.http.get('http://localhost:56477/api/Employees').map(res => <Employee[]>res.json() as Employee[]);
    }

    public getEmpleados(): Employee[] {
        var empleados: Employee[];
        console.log('get empleados');
        this.http.get('http://localhost:56477/api/Employees')
            .map(res => <Employee[]>res.json() as Employee[])
            .subscribe(data => {
                empleados = data
            });
        console.log(empleados);
        return empleados;
    }

    getEmployees2(): Employee[] {
        var empleados: Employee[];
        console.log('get empleados2');
        this.http.get('http://localhost:56477/api/Employees').subscribe((value: Response) => {
            console.log(value);
            empleados = value.json();
        });
        console.log(empleados);
        return empleados;
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

}
