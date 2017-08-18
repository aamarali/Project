"use strict";
var router_1 = require('@angular/router');
var user_component_1 = require('./components/user.component');
var home_component_1 = require('./components/home.component');
var Employees_component_1 = require('./components/Employees.component');
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'employees', component: Employees_component_1.EmployeesComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map