(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Lhg":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/authentication/auth.service */ "84Y0");
/* harmony import */ var src_app_form_login_components_login_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/form-login/components/login/services/login.service */ "xEHL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function HeaderComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onClickLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService, loginService) {
        this.authService = authService;
        this.loginService = loginService;
    }
    ngOnInit() {
    }
    onClickLogout() {
        this.loginService.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_form_login_components_login_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 1, consts: [["flex", ""], ["mat-icon-button", "", "mdTooltip", "Log out", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "mdTooltip", "Log out", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Jump The Queue\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_button_2_Template, 3, 0, "button", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLogged());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jbellver\Desktop\Projects\jumpthequeue\workspaces\main\jumpthequeue\angular\src\main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/backendModels/interfaces */ "Cncr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/register.service */ "8+oW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _form_login_components_login_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-login/components/login/services/login.service */ "xEHL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











class RegisterComponent {
    constructor(registerService, router, snackBar, loginService) {
        this.registerService = registerService;
        this.router = router;
        this.snackBar = snackBar;
        this.loginService = loginService;
    }
    submitRegister(formValue) {
        const visitor = new _shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_0__["Visitor"]();
        visitor.username = formValue.username;
        visitor.name = formValue.name;
        visitor.phoneNumber = formValue.phoneNumber;
        visitor.password = formValue.password;
        visitor.acceptedCommercial = formValue.acceptedCommercial;
        visitor.acceptedTerms = formValue.acceptedTerms;
        visitor.userType = false;
        this.registerService.registerVisitor(visitor).subscribe((visitorResult) => {
            this.loginService.login(visitorResult.username, visitorResult.password);
        });
    }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_form_login_components_login_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 29, vars: 1, consts: [["layout-padding", "", 3, "ngSubmit"], ["registerForm", "ngForm"], ["layout", "row", "flex", ""], ["flex", ""], ["matInput", "", "placeholder", "Email", "ngModel", "", "email", "", "name", "username", "required", ""], ["matInput", "", "placeholder", "Password", "ngModel", "", "name", "password", "type", "password", "required", ""], ["matInput", "", "placeholder", "Name", "ngModel", "", "name", "name", "required", ""], ["matInput", "", "placeholder", "Phone Number", "ngModel", "", "name", "phoneNumber", "required", ""], ["layout-xs", "row", "flex", ""], ["layout", "column", "flex", ""], ["name", "acceptedTerms", "ngModel", "", "required", ""], ["name", "acceptedCommercial", "ngModel", "", "required", ""], ["layout", "column", "flex", "10"], ["mat-raised-button", "", "type", "submit", 3, "disabled"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return ctx.submitRegister(_r0.form.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Accept Terms And conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "I want to receive notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxRequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "2QFh":
/*!***********************************************************!*\
  !*** ./src/app/core/authentication/auth-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "84Y0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isLogged() && this.authService.isPermited('VISITOR')) { // If its logged in and its role is visitor
            return true;
        }
        if (!this.authService.isLogged()) { // if its not logged in
            console.log('Error login');
        }
        if (this.router.url === '/') { // if the router is the app route
            this.router.navigate(['/login']);
        }
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8+oW":
/*!*******************************************************!*\
  !*** ./src/app/register/services/register.service.ts ***!
  \*******************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RegisterService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrlRestServices;
    }
    registerVisitor(visitor) {
        return this.http.post(`${this.baseUrl}` + '/visitormanagement/v1/visitor', visitor);
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "84Y0":
/*!*****************************************************!*\
  !*** ./src/app/core/authentication/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config */ "Vx+w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AuthService {
    constructor() {
        this.logged = false;
        this.user = '';
        this.userId = 0;
        this.currentRole = 'NONE';
    }
    isLogged() {
        return this.logged;
    }
    setLogged(login) {
        this.logged = login;
    }
    getUser() {
        return this.user;
    }
    setUser(username) {
        this.user = username;
    }
    getUserId() {
        return this.userId;
    }
    setUserId(userId) {
        this.userId = userId;
    }
    getToken() {
        return this.token;
    }
    setToken(token) {
        this.token = token;
    }
    setRole(role) {
        this.currentRole = role;
    }
    getPermission(roleName) {
        const role = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(src_app_config__WEBPACK_IMPORTED_MODULE_1__["config"].roles, { name: roleName });
        return role.permission;
    }
    isPermited(userRole) {
        return (this.getPermission(this.currentRole) === this.getPermission(userRole));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrlRestServices: 'http://localhost:8081/jumpthequeue/services/rest'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cncr":
/*!****************************************************!*\
  !*** ./src/app/shared/backendModels/interfaces.ts ***!
  \****************************************************/
/*! exports provided: Visitor, VisitorArray, FilterVisitor, Pageable, Sort, Role, FilterAccessCode, FilterQueue, AccessCode, Queue, QueueArray, AccessCodeArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visitor", function() { return Visitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorArray", function() { return VisitorArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterVisitor", function() { return FilterVisitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pageable", function() { return Pageable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterAccessCode", function() { return FilterAccessCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterQueue", function() { return FilterQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessCode", function() { return AccessCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return Queue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueArray", function() { return QueueArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessCodeArray", function() { return AccessCodeArray; });
class Visitor {
}
class VisitorArray {
}
class FilterVisitor {
}
class Pageable {
}
class Sort {
}
class Role {
}
class FilterAccessCode {
}
class FilterQueue {
}
class AccessCode {
}
class Queue {
}
class QueueArray {
}
class AccessCodeArray {
}


/***/ }),

/***/ "MbE6":
/*!****************************************************************!*\
  !*** ./src/app/form-login/components/login/login.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login.service */ "xEHL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







class LoginComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    ngOnInit() {
    }
    onRegisterClick() {
        this.router.navigate(['Register']);
    }
    submitLogin(loginFormValues) {
        this.loginService.login(loginFormValues.username, loginFormValues.password);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 1, consts: [["layout-padding", "", 3, "ngSubmit"], ["loginForm", "ngForm"], ["layout", "row", "flex", ""], ["flex", ""], ["matInput", "", "placeholder", "Email", "ngModel", "", "email", "", "name", "username", "required", ""], ["matInput", "", "placeholder", "Password", "ngModel", "", "name", "password", "type", "password", "required", ""], ["layout", "row", "flex", "", "layout-margin", ""], ["layout", "column", "flex", ""], ["mat-raised-button", "", "type", "submit", 3, "disabled"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.submitLogin(_r0.form.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() { return ctx.onRegisterClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "NaDL":
/*!*************************************************************!*\
  !*** ./src/app/form-login/components/login/login-module.ts ***!
  \*************************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/core.module */ "krJt");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "MbE6");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/login.service */ "xEHL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_shared_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_shared_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]], exports: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @covalent/core/layout */ "YGdM");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["td-toolbar-content", "", "flex", ""], ["layout-align", "center center", "layout", "row", "flex", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td-layout-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ">\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_covalent_core_layout__WEBPACK_IMPORTED_MODULE_1__["TdLayoutNavComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Vx+w":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
    roles: [
        { name: 'VISITOR', permission: 0 },
        { name: 'BOSS', permission: 1 },
    ],
};


/***/ }),

/***/ "XdhX":
/*!******************************************************!*\
  !*** ./src/app/view-queue/services/queue.service.ts ***!
  \******************************************************/
/*! exports provided: QueueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueService", function() { return QueueService; });
/* harmony import */ var src_app_shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/backendModels/interfaces */ "Cncr");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class QueueService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrlRestServices;
    }
    getActiveQueue() {
        const filters = new src_app_shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_0__["FilterQueue"]();
        filters.active = true;
        const pageable = new src_app_shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_0__["Pageable"]();
        pageable.pageNumber = 0;
        pageable.pageSize = 1;
        pageable.sort = [];
        filters.pageable = pageable;
        return this.http.post(`${this.baseUrl}` + '/queuemanagement/v1/queue/search', filters)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(queues => queues.content[0]));
    }
}
QueueService.ɵfac = function QueueService_Factory(t) { return new (t || QueueService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
QueueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: QueueService, factory: QueueService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/core.module */ "krJt");
/* harmony import */ var _form_login_form_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-login/form-login-module */ "elp+");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _view_queue_view_queue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-queue/view-queue.component */ "tE07");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");

// Application components and services








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _form_login_form_login_module__WEBPACK_IMPORTED_MODULE_4__["FormLoginModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _shared_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _view_queue_view_queue_component__WEBPACK_IMPORTED_MODULE_7__["ViewQueueComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _form_login_form_login_module__WEBPACK_IMPORTED_MODULE_4__["FormLoginModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _shared_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ }),

/***/ "elp+":
/*!*************************************************!*\
  !*** ./src/app/form-login/form-login-module.ts ***!
  \*************************************************/
/*! exports provided: FormLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginModule", function() { return FormLoginModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _form_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-login.component */ "vGKD");
/* harmony import */ var _shared_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/core.module */ "krJt");
/* harmony import */ var _components_login_login_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login-module */ "NaDL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class FormLoginModule {
}
FormLoginModule.ɵfac = function FormLoginModule_Factory(t) { return new (t || FormLoginModule)(); };
FormLoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FormLoginModule });
FormLoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _components_login_login_module__WEBPACK_IMPORTED_MODULE_3__["LoginModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FormLoginModule, { declarations: [_form_login_component__WEBPACK_IMPORTED_MODULE_1__["FormLoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _components_login_login_module__WEBPACK_IMPORTED_MODULE_3__["LoginModule"]], exports: [_form_login_component__WEBPACK_IMPORTED_MODULE_1__["FormLoginComponent"]] }); })();


/***/ }),

/***/ "krJt":
/*!***************************************!*\
  !*** ./src/app/shared/core.module.ts ***!
  \***************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _covalent_core_chips__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @covalent/core/chips */ "FWZe");
/* harmony import */ var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @covalent/core/layout */ "YGdM");
/* harmony import */ var _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @covalent/core/expansion-panel */ "/Qx0");
/* harmony import */ var _covalent_core_data_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @covalent/core/data-table */ "6809");
/* harmony import */ var _covalent_core_paging__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @covalent/core/paging */ "ie0s");
/* harmony import */ var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @covalent/core/dialogs */ "18Cx");
/* harmony import */ var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @covalent/core/loading */ "dZyu");
/* harmony import */ var _covalent_core_media__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @covalent/core/media */ "3dAa");
/* harmony import */ var _covalent_core_notifications__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @covalent/core/notifications */ "dP/O");
/* harmony import */ var _covalent_core_common__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @covalent/core/common */ "oDrQ");
/* harmony import */ var _core_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../core/authentication/auth-guard.service */ "2QFh");
/* harmony import */ var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../core/authentication/auth.service */ "84Y0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/core */ "fXoL");












































class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵdefineInjector"]({ providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_42__["AuthService"],
        _core_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_41__["AuthGuardService"],
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _covalent_core_media__WEBPACK_IMPORTED_MODULE_38__["CovalentMediaModule"],
            _covalent_core_layout__WEBPACK_IMPORTED_MODULE_32__["CovalentLayoutModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_30__["CdkTableModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _covalent_core_chips__WEBPACK_IMPORTED_MODULE_31__["CovalentChipsModule"],
        _covalent_core_layout__WEBPACK_IMPORTED_MODULE_32__["CovalentLayoutModule"],
        _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_33__["CovalentExpansionPanelModule"],
        _covalent_core_data_table__WEBPACK_IMPORTED_MODULE_34__["CovalentDataTableModule"],
        _covalent_core_paging__WEBPACK_IMPORTED_MODULE_35__["CovalentPagingModule"],
        _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_36__["CovalentDialogsModule"],
        _covalent_core_loading__WEBPACK_IMPORTED_MODULE_37__["CovalentLoadingModule"],
        _covalent_core_media__WEBPACK_IMPORTED_MODULE_38__["CovalentMediaModule"],
        _covalent_core_notifications__WEBPACK_IMPORTED_MODULE_39__["CovalentNotificationsModule"],
        _covalent_core_common__WEBPACK_IMPORTED_MODULE_40__["CovalentCommonModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_30__["CdkTableModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_43__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _covalent_core_media__WEBPACK_IMPORTED_MODULE_38__["CovalentMediaModule"],
        _covalent_core_layout__WEBPACK_IMPORTED_MODULE_32__["CovalentLayoutModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_30__["CdkTableModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _covalent_core_chips__WEBPACK_IMPORTED_MODULE_31__["CovalentChipsModule"],
        _covalent_core_layout__WEBPACK_IMPORTED_MODULE_32__["CovalentLayoutModule"],
        _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_33__["CovalentExpansionPanelModule"],
        _covalent_core_data_table__WEBPACK_IMPORTED_MODULE_34__["CovalentDataTableModule"],
        _covalent_core_paging__WEBPACK_IMPORTED_MODULE_35__["CovalentPagingModule"],
        _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_36__["CovalentDialogsModule"],
        _covalent_core_loading__WEBPACK_IMPORTED_MODULE_37__["CovalentLoadingModule"],
        _covalent_core_media__WEBPACK_IMPORTED_MODULE_38__["CovalentMediaModule"],
        _covalent_core_notifications__WEBPACK_IMPORTED_MODULE_39__["CovalentNotificationsModule"],
        _covalent_core_common__WEBPACK_IMPORTED_MODULE_40__["CovalentCommonModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_30__["CdkTableModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();


/***/ }),

/***/ "tE07":
/*!****************************************************!*\
  !*** ./src/app/view-queue/view-queue.component.ts ***!
  \****************************************************/
/*! exports provided: ViewQueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQueueComponent", function() { return ViewQueueComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_access_code_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/access-code.service */ "u7It");
/* harmony import */ var _services_queue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/queue.service */ "XdhX");
/* harmony import */ var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/authentication/auth.service */ "84Y0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @covalent/core/layout */ "YGdM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function ViewQueueComponent_td_layout_0_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Your Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Currently estimate time: 10:00:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.accessCodeVisitor.ticketNumber);
} }
function ViewQueueComponent_td_layout_0_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewQueueComponent_td_layout_0_div_1_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onJoinQueue(data_r1.queue.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Join the queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewQueueComponent_td_layout_0_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewQueueComponent_td_layout_0_div_1_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onLeaveQueue(data_r1.accessCodeVisitor.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Leave the queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewQueueComponent_td_layout_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ViewQueueComponent_td_layout_0_div_1_div_3_Template, 10, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Currently Being Attended:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ViewQueueComponent_td_layout_0_div_1_div_11_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ViewQueueComponent_td_layout_0_div_1_div_12_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r1.accessCodeVisitor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.accessCodeAttended == null ? null : data_r1.accessCodeAttended.ticketNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r1.accessCodeVisitor === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r1.accessCodeVisitor);
} }
function ViewQueueComponent_td_layout_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "The queue is not active try again later");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ViewQueueComponent_td_layout_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ViewQueueComponent_td_layout_0_div_1_Template, 13, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ViewQueueComponent_td_layout_0_div_2_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r1.queue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r1.queue === null || data_r1.queue !== null && data_r1.queue.active === false);
} }
const _c0 = function (a0, a1, a2) { return { accessCodeAttended: a0, accessCodeVisitor: a1, queue: a2 }; };
class ViewQueueComponent {
    constructor(accessCodeService, queueService, authService) {
        this.accessCodeService = accessCodeService;
        this.queueService = queueService;
        this.authService = authService;
    }
    ngOnInit() {
        // Every minute we are going to update accessCodeAttended$ starting instantly
        this.accessCodeAttended$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, 60000).pipe(
        // we switchMap and give it the value necesary from the accessCodeService
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => {
            return this.accessCodeService.getCurrentlyAttendedAccessCode();
        }));
        this.accessCodeVisitor$ = this.accessCodeService.getVisitorAccessCode(this.authService.getUserId());
        this.queue$ = this.queueService.getActiveQueue();
    }
    onJoinQueue(queueId) {
        this.accessCodeVisitor$ = this.accessCodeService.saveAccessCode(this.authService.getUserId(), queueId);
    }
    onLeaveQueue(accessCodeId) {
        this.accessCodeService.deleteAccessCode(accessCodeId);
        this.accessCodeVisitor$ = null;
    }
}
ViewQueueComponent.ɵfac = function ViewQueueComponent_Factory(t) { return new (t || ViewQueueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_access_code_service__WEBPACK_IMPORTED_MODULE_3__["AccessCodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_queue_service__WEBPACK_IMPORTED_MODULE_4__["QueueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
ViewQueueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewQueueComponent, selectors: [["app-view-queue"]], decls: 4, vars: 11, consts: [[4, "ngIf"], ["class", "row", 4, "ngIf"], ["mat-card-image", "", "src", "assets/images/jumptheq.png"], [1, "text-center"], [1, "text-center", "row"], [1, "text-left", "text-xl", "push-md", 2, "margin-bottom", "10px"], [1, "row"], [1, "text-center", "text-xxl", "push-lg", 2, "font-size", "100px"], ["style", "border-top: 2px solid black;", "class", "pad-bottom-lg pad-top-lg text-center row", 4, "ngIf"], ["style", "margin: 8px;", "class", "row text-right", 4, "ngIf"], [1, "text-center", "text-xxl", "push-left-md", 2, "font-size", "75px", "margin", "0px"], [1, "row", 2, "border-bottom", "2px solid black"], [1, "push-left-md"], [1, "pad-bottom-lg", "pad-top-lg", "text-center", "row", 2, "border-top", "2px solid black"], ["mat-raised-button", "", "color", "primary", 1, "text-upper", 3, "click"], [1, "row", "text-right", 2, "margin", "8px"], [1, "text-center", "text-xxl", "push-lg", 2, "font-size", "50px"]], template: function ViewQueueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ViewQueueComponent_td_layout_0_Template, 3, 2, "td-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](7, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.accessCodeAttended$), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, ctx.accessCodeVisitor$), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, ctx.queue$)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_7__["TdLayoutComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXF1ZXVlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "u7It":
/*!************************************************************!*\
  !*** ./src/app/view-queue/services/access-code.service.ts ***!
  \************************************************************/
/*! exports provided: AccessCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessCodeService", function() { return AccessCodeService; });
/* harmony import */ var src_app_shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/backendModels/interfaces */ "Cncr");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/authentication/auth.service */ "84Y0");







class AccessCodeService {
    constructor(router, http, authService) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrlRestServices;
    }
    getCurrentlyAttendedAccessCode() {
        const filters = new src_app_shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_0__["FilterAccessCode"]();
        const pageable = new src_app_shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_0__["Pageable"]();
        filters.endTime = null;
        pageable.pageNumber = 0;
        pageable.pageSize = 1;
        filters.pageable = pageable;
        return this.http.post(`${this.baseUrl}` + '/accesscodemanagement/v1/accesscode/cto/search', filters)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(accesscodes => {
            if (!accesscodes.content[0]) { // if theres no response it means theres noone in the queue
                return null;
            }
            else {
                if (accesscodes.content[0].accessCode.startTime != null) {
                    // if start time is not null it means that hes being attended
                    return accesscodes.content[0].accessCode;
                }
                else {
                    // noone being attended
                    return null;
                }
            }
        }));
    }
    getVisitorAccessCode(visitorId) {
        const filters = new src_app_shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_0__["FilterAccessCode"]();
        const pageable = new src_app_shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_0__["Pageable"]();
        pageable.pageNumber = 0;
        pageable.pageSize = 1;
        filters.visitorId = visitorId;
        filters.pageable = pageable;
        return this.http.post(`${this.baseUrl}` + '/accesscodemanagement/v1/accesscode/cto/search', filters)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(accesscodes => {
            if (accesscodes.content[0]) {
                return accesscodes.content[0].accessCode;
            }
            else {
                return null;
            }
        }));
    }
    deleteAccessCode(codeAccessId) {
        this.http.delete(`${this.baseUrl}` + '/accesscodemanagement/v1/accesscode/' + codeAccessId + '/').subscribe();
    }
    saveAccessCode(visitorId, queueId) {
        const accessCode = new src_app_shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_0__["AccessCode"]();
        accessCode.visitorId = visitorId;
        accessCode.queueId = queueId;
        return this.http.post(`${this.baseUrl}` + '/accesscodemanagement/v1/accesscode/', accessCode);
    }
}
AccessCodeService.ɵfac = function AccessCodeService_Factory(t) { return new (t || AccessCodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
AccessCodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AccessCodeService, factory: AccessCodeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vGKD":
/*!****************************************************!*\
  !*** ./src/app/form-login/form-login.component.ts ***!
  \****************************************************/
/*! exports provided: FormLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginComponent", function() { return FormLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @covalent/core/layout */ "YGdM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "MbE6");




class FormLoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormLoginComponent.ɵfac = function FormLoginComponent_Factory(t) { return new (t || FormLoginComponent)(); };
FormLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormLoginComponent, selectors: [["app-form-login"]], decls: 4, vars: 0, consts: [["mat-card-image", "", "src", "assets/images/jumptheq.png"]], template: function FormLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_covalent_core_layout__WEBPACK_IMPORTED_MODULE_1__["TdLayoutComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWxvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-login/form-login.component */ "vGKD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _view_queue_view_queue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-queue/view-queue.component */ "tE07");
/* harmony import */ var _core_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/authentication/auth-guard.service */ "2QFh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const appRoutes = [
    { path: 'FormLogin', component: _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_1__["FormLoginComponent"] },
    { path: 'Register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: '**', redirectTo: '/FormLogin', pathMatch: 'full' },
    { path: 'ViewQueue', component: _view_queue_view_queue_component__WEBPACK_IMPORTED_MODULE_3__["ViewQueueComponent"], canActivate: [_core_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xEHL":
/*!***********************************************************************!*\
  !*** ./src/app/form-login/components/login/services/login.service.ts ***!
  \***********************************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/backendModels/interfaces */ "Cncr");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/authentication/auth.service */ "84Y0");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");








class LoginService {
    constructor(router, http, authService, snackBar) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.snackBar = snackBar;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrlRestServices;
    }
    getVisitorByUsername(username) {
        const filters = new src_app_shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_1__["FilterVisitor"]();
        const pageable = new src_app_shared_backendModels_interfaces__WEBPACK_IMPORTED_MODULE_1__["Pageable"]();
        pageable.pageNumber = 0;
        pageable.pageSize = 1;
        pageable.sort = [];
        filters.username = username;
        filters.pageable = pageable;
        return this.http.post(`${this.baseUrl}` + '/visitormanagement/v1/visitor/search', filters)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((visitors) => visitors.content[0]));
    }
    login(username, password) {
        // Checks if given username and password are the ones aved in the database
        this.getVisitorByUsername(username).subscribe((visitorFound) => {
            if (visitorFound.username === username && visitorFound.password === password) {
                this.authService.setUserId(visitorFound.id);
                this.authService.setLogged(true);
                this.authService.setUser(visitorFound.username);
                if (visitorFound.userType === false) {
                    this.authService.setRole('VISITOR');
                    this.router.navigate(['ViewQueue']);
                }
                else {
                    this.authService.setLogged(false);
                    this.snackBar.open('access error', 'OK', {
                        duration: 2000,
                    });
                }
            }
            else {
                this.snackBar.open('access error', 'OK', {
                    duration: 2000,
                });
            }
        }, (err) => {
            this.snackBar.open('access error', 'OK', {
                duration: 2000,
            });
        });
    }
    logout() {
        this.authService.setLogged(false);
        this.authService.setUser('');
        this.authService.setUserId(0);
        this.router.navigate(['FormLogin']);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map