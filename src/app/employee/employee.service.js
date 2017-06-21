"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
/**
 * Service for notify and subscribe to events.
 */
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:56477/api/Employees';
        console.log('constructor');
    }
    EmployeeService.prototype.addEmployee = function (employee) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, employee, options)
            .map(this.extractData);
    };
    EmployeeService.prototype.editEmployee = function () {
    };
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get('http://localhost:56477/api/Employees').map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.getEmpleados = function () {
        var empleados;
        console.log('get empleados');
        this.http.get('http://localhost:56477/api/Employees')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            empleados = data;
        });
        console.log(empleados);
        return empleados;
    };
    EmployeeService.prototype.getEmployees2 = function () {
        var empleados;
        console.log('get empleados2');
        this.http.get('http://localhost:56477/api/Employees').subscribe(function (value) {
            console.log(value);
            empleados = value.json();
        });
        console.log(empleados);
        return empleados;
    };
    EmployeeService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    EmployeeService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || ' error');
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map