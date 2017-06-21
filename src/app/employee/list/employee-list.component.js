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
var employee_service_1 = require("../employee.service");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(employeeService) {
        var _this = this;
        this.employeeService = employeeService;
        this.employeeService.getEmployees().subscribe(function (value) {
            _this.employees = value;
        });
        console.log('Salgo de constructor');
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        // en el momento de la suscripci�n es cuando se dispara la llamada
        //this.employeeService
        //    .getEmployees()
        //    .subscribe(resultado => this.employees = resultado);
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'tsi1-employee-list',
        templateUrl: 'employee-list.component.html',
        styleUrls: ['employee-list.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map