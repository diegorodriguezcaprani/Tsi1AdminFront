"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var employee_list_component_1 = require("./employee/list/employee-list.component");
var manage_employee_component_1 = require("./employee/manage/manage-employee.component");
var employee_service_1 = require("./employee/employee.service");
var reports_component_1 = require("./utils/reports-component");
var maps_component_1 = require("./utils/maps-component");
var http_1 = require("@angular/http");
var forms_2 = require("@angular/forms");
var core_module_1 = require("@agm/core/core.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            common_1.CommonModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            forms_2.FormsModule,
            core_module_1.AgmCoreModule.forRoot({
                apiKey: 'YOUR_KEY'
            })],
        declarations: [app_component_1.AppComponent, employee_list_component_1.EmployeeListComponent, manage_employee_component_1.ManageEmployeeComponent, reports_component_1.ReportsComponent, maps_component_1.MapsComponent],
        providers: [employee_service_1.EmployeeService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map