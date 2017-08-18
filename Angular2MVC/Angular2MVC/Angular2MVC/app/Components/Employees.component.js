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
var core_1 = require('@angular/core');
var user_service_1 = require('../Service/user.service');
var forms_1 = require('@angular/forms');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var enum_1 = require('../Shared/enum');
var global_1 = require('../Shared/global');
var EmployeesComponent = (function () {
    function EmployeesComponent(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.indLoading = false;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        this.userFrm = this.fb.group({
            Id: [''],
            FirstName: ['', forms_1.Validators.required],
            LastName: [''],
            Gender: ['', forms_1.Validators.required],
            Title: [''],
            Address: ['']
        });
        this.LoadUsers();
    };
    EmployeesComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._userService.get(global_1.Global.BASE_EMPLOYEE_ENDPOINT)
            .subscribe(function (employees) { _this.employees = employees; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    EmployeesComponent.prototype.addUser = function () {
        this.dbops = enum_1.DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Employee";
        this.modalBtnTitle = "Add";
        this.userFrm.reset();
        this.modal.open();
    };
    EmployeesComponent.prototype.editUser = function (id) {
        this.dbops = enum_1.DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit User";
        this.modalBtnTitle = "Update";
        this.employee = this.employees.filter(function (x) { return x.Id == id; })[0];
        this.userFrm.setValue(this.employee);
        this.modal.open();
    };
    EmployeesComponent.prototype.deleteUser = function (id) {
        this.dbops = enum_1.DBOperation.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.employee = this.employees.filter(function (x) { return x.Id == id; })[0];
        this.userFrm.setValue(this.employee);
        this.modal.open();
    };
    EmployeesComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this._userService.post(global_1.Global.BASE_EMPLOYEE_ENDPOINT, formData._value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully added.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.update:
                this._userService.put(global_1.Global.BASE_EMPLOYEE_ENDPOINT, formData._value.Id, formData._value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully updated.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.delete:
                this._userService.delete(global_1.Global.BASE_EMPLOYEE_ENDPOINT, formData._value.Id).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully deleted.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
        }
    };
    EmployeesComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], EmployeesComponent.prototype, "modal", void 0);
    EmployeesComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Components/Employees.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, user_service_1.UserService])
    ], EmployeesComponent);
    return EmployeesComponent;
}());
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=Employees.component.js.map