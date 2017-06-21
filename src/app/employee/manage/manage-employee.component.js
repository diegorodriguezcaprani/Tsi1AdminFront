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
var employee_1 = require("../employee");
var employee_service_1 = require("../employee.service");
var ManageEmployeeComponent = (function () {
    function ManageEmployeeComponent(employeeService) {
        this.employeeService = employeeService;
        this.tipos = ['Full time empleado', 'Part time empleado'];
        this.model = new employee_1.Employee(6, 'Prueba5', 1, new Date('26/06/2008'));
        this.submitted = false;
    }
    ManageEmployeeComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.employeeService.addEmployee(this.model).subscribe();
        console.log('Salgo de constructor manage');
    };
    return ManageEmployeeComponent;
}());
ManageEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'tsi1-manage-employee',
        templateUrl: 'manage-employee.component.html',
        styleUrls: ['manage-employee.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], ManageEmployeeComponent);
exports.ManageEmployeeComponent = ManageEmployeeComponent;
//# sourceMappingURL=manage-employee.component.js.map