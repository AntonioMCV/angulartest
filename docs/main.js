(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cabecera></app-cabecera>\r\n\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _equipo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equipo.service */ "./src/app/equipo.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cabecera/cabecera.component */ "./src/app/cabecera/cabecera.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _ngif_ngif_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ngif/ngif.component */ "./src/app/ngif/ngif.component.ts");
/* harmony import */ var _ngclass_ngclass_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ngclass/ngclass.component */ "./src/app/ngclass/ngclass.component.ts");
/* harmony import */ var _ngfor_ngfor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ngfor/ngfor.component */ "./src/app/ngfor/ngfor.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./errorpage/errorpage.component */ "./src/app/errorpage/errorpage.component.ts");
/* harmony import */ var _rutasyservicios_rutasyservicios_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rutasyservicios/rutasyservicios.component */ "./src/app/rutasyservicios/rutasyservicios.component.ts");
/* harmony import */ var _detalleequipo_detalleequipo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detalleequipo/detalleequipo.component */ "./src/app/detalleequipo/detalleequipo.component.ts");




//servicios












var routes = [
    { path: 'ngif', component: _ngif_ngif_component__WEBPACK_IMPORTED_MODULE_9__["NgifComponent"] },
    { path: 'ngclass', component: _ngclass_ngclass_component__WEBPACK_IMPORTED_MODULE_10__["NgclassComponent"] },
    { path: 'ngfor', component: _ngfor_ngfor_component__WEBPACK_IMPORTED_MODULE_11__["NgforComponent"] },
    { path: 'rutasyservicios', component: _rutasyservicios_rutasyservicios_component__WEBPACK_IMPORTED_MODULE_14__["RutasyserviciosComponent"] },
    { path: 'detalleequipo/:id', component: _detalleequipo_detalleequipo_component__WEBPACK_IMPORTED_MODULE_15__["DetalleequipoComponent"] },
    { path: 'errorpage', component: _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_13__["ErrorpageComponent"] },
    { path: '', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_12__["InicioComponent"], pathMatch: 'full' },
    { path: '**', redirectTo: 'errorpage', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_7__["CabeceraComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _ngif_ngif_component__WEBPACK_IMPORTED_MODULE_9__["NgifComponent"],
                _ngclass_ngclass_component__WEBPACK_IMPORTED_MODULE_10__["NgclassComponent"],
                _ngfor_ngfor_component__WEBPACK_IMPORTED_MODULE_11__["NgforComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_12__["InicioComponent"],
                _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_13__["ErrorpageComponent"],
                _rutasyservicios_rutasyservicios_component__WEBPACK_IMPORTED_MODULE_14__["RutasyserviciosComponent"],
                _detalleequipo_detalleequipo_component__WEBPACK_IMPORTED_MODULE_15__["DetalleequipoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            providers: [
                _equipo_service__WEBPACK_IMPORTED_MODULE_4__["EquipoService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cabecera/cabecera.component.html":
/*!**************************************************!*\
  !*** ./src/app/cabecera/cabecera.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">Angular Tests</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/ngif']\">ngIf</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/ngclass']\">ngClass</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/ngfor']\">ngFor</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/rutasyservicios']\">Rutas Dinamicas y Servicios</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/cabecera/cabecera.component.sass":
/*!**************************************************!*\
  !*** ./src/app/cabecera/cabecera.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhYmVjZXJhL2NhYmVjZXJhLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/cabecera/cabecera.component.ts":
/*!************************************************!*\
  !*** ./src/app/cabecera/cabecera.component.ts ***!
  \************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CabeceraComponent = /** @class */ (function () {
    function CabeceraComponent() {
    }
    CabeceraComponent.prototype.ngOnInit = function () {
    };
    CabeceraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cabecera',
            template: __webpack_require__(/*! ./cabecera.component.html */ "./src/app/cabecera/cabecera.component.html"),
            styles: [__webpack_require__(/*! ./cabecera.component.sass */ "./src/app/cabecera/cabecera.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CabeceraComponent);
    return CabeceraComponent;
}());



/***/ }),

/***/ "./src/app/detalleequipo/detalleequipo.component.html":
/*!************************************************************!*\
  !*** ./src/app/detalleequipo/detalleequipo.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h1 class=\"bg-dark text-white text-center my-4 py-4\">Ruta Dinamica {{equipo.nombre}}</h1>\r\n\r\n<div class=\"mt-5\">\r\n  <h3>Nombre: {{equipo.nombre}}</h3>\r\n  <p>Especialidad: {{equipo.especialidad}}</p>\r\n  <p>descripcion: {{equipo.descripcion}}</p>\r\n  <a [routerLink]=\"['/rutasyservicios']\">Volver a la lista</a>\r\n</div>\r\n<pre class=\"border border-dark bg-light my-5\">\r\n\r\n  &lt;div class=\"mt-5\"&gt;\r\n    &lt;h3&gt;Nombre: <b>equipo.nombre</b>&lt;/h3&gt;\r\n    &lt;p&gt;Especialidad: <b>equipo.especialidad</b>&lt;/p&gt;\r\n    &lt;p&gt;descripcion: <b>equipo.descripcion</b>&lt;/p&gt;\r\n    &lt;a <b>[routerLink]=\"['/rutasyservicios']\"</b>&gt;Volver a la lista &lt;/a&gt;\r\n  &lt;/div&gt;\r\n\r\n</pre>"

/***/ }),

/***/ "./src/app/detalleequipo/detalleequipo.component.sass":
/*!************************************************************!*\
  !*** ./src/app/detalleequipo/detalleequipo.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFsbGVlcXVpcG8vZGV0YWxsZWVxdWlwby5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/detalleequipo/detalleequipo.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/detalleequipo/detalleequipo.component.ts ***!
  \**********************************************************/
/*! exports provided: DetalleequipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleequipoComponent", function() { return DetalleequipoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _equipo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../equipo.service */ "./src/app/equipo.service.ts");




var DetalleequipoComponent = /** @class */ (function () {
    function DetalleequipoComponent(ruta, _servicio) {
        var _this = this;
        this.ruta = ruta;
        this._servicio = _servicio;
        this.equipo = [];
        this.ruta.params.subscribe(function (params) {
            console.log(params['id']);
            _this.equipo = _this._servicio.obetnerUno(params['id']);
        });
    }
    DetalleequipoComponent.prototype.ngOnInit = function () {
    };
    DetalleequipoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalleequipo',
            template: __webpack_require__(/*! ./detalleequipo.component.html */ "./src/app/detalleequipo/detalleequipo.component.html"),
            styles: [__webpack_require__(/*! ./detalleequipo.component.sass */ "./src/app/detalleequipo/detalleequipo.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _equipo_service__WEBPACK_IMPORTED_MODULE_3__["EquipoService"]])
    ], DetalleequipoComponent);
    return DetalleequipoComponent;
}());



/***/ }),

/***/ "./src/app/equipo.service.ts":
/*!***********************************!*\
  !*** ./src/app/equipo.service.ts ***!
  \***********************************/
/*! exports provided: EquipoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoService", function() { return EquipoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EquipoService = /** @class */ (function () {
    function EquipoService() {
        this.equipo = [
            {
                nombre: 'Ignacio',
                especialidad: 'HTML',
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, unde ut, eius commodi cupiditate molestias esse, vero quaerat maiores aliquid neque blanditiis ipsa ab! Beatae labore eaque maiores perspiciatis pariatur?',
            },
            {
                nombre: 'Marta',
                especialidad: 'CSS',
                descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deleniti dicta porro aspernatur eos nostrum repellat officiis quo vel voluptates, expedita autem doloremque sequi? Corporis ducimus quis aut sint consequuntur?',
            }
        ];
        console.log("funcionando servicio");
    }
    EquipoService.prototype.obtenerEquipo = function () {
        return this.equipo;
    };
    EquipoService.prototype.obetnerUno = function (i) {
        return this.equipo[i];
    };
    EquipoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EquipoService);
    return EquipoService;
}());



/***/ }),

/***/ "./src/app/errorpage/errorpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/errorpage/errorpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"bg-dark text-white text-center my-4 py-4\">La pagina no existe</h1>\r\n\r\n<h5 class=\"text-center\">\r\n  Error 404: La pagina a la que intentas acceder no existe o ha dejado de existir.\r\n</h5>"

/***/ }),

/***/ "./src/app/errorpage/errorpage.component.sass":
/*!****************************************************!*\
  !*** ./src/app/errorpage/errorpage.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycGFnZS9lcnJvcnBhZ2UuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/errorpage/errorpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/errorpage/errorpage.component.ts ***!
  \**************************************************/
/*! exports provided: ErrorpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpageComponent", function() { return ErrorpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorpageComponent = /** @class */ (function () {
    function ErrorpageComponent() {
    }
    ErrorpageComponent.prototype.ngOnInit = function () {
    };
    ErrorpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-errorpage',
            template: __webpack_require__(/*! ./errorpage.component.html */ "./src/app/errorpage/errorpage.component.html"),
            styles: [__webpack_require__(/*! ./errorpage.component.sass */ "./src/app/errorpage/errorpage.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorpageComponent);
    return ErrorpageComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/ngif']\">ngIf</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/ngclass']\">ngClass</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/ngfor']\">ngFor</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/rutasyservicios']\">Rutas Dinamicas y Servicios</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.sass":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.sass */ "./src/app/footer/footer.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"bg-dark text-white text-center my-4 py-4\">Angular Tests</h1>\r\n\r\n<h5 class=\"text-center\">\r\n  Aquí encontraremos varios ejemplos para saber utilizar las principales ventajas de AngularJS. <br><br>\r\n  Ten presente que por motivos de incompatibilidad se han tenido que eliminar las llavecillas de los cuadros\r\n  de codigos de ejemplos y no es completamente fiel a como realmente hay que escribirlo.<br><br>\r\n  Si lo necesitas siempre puedes recurrir al archivo original.<br><br>\r\n</h5>\r\n"

/***/ }),

/***/ "./src/app/inicio/inicio.component.sass":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9pbmljaW8uY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.sass */ "./src/app/inicio/inicio.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/ngclass/ngclass.component.html":
/*!************************************************!*\
  !*** ./src/app/ngclass/ngclass.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"bg-dark text-white text-center my-4 py-4\">[ngClass] activo = {{activo}}; fondo = {{fondo}}</h1>\r\n<p class=\"alert alert-secondary\">\r\n  Podemos usar \"<b>[ngClass]</b>\" para poder tener clases dinamicas en nuestro HTML. Para ello nos servimos\r\n  de unos botones superiores que se ocupen de ir cambiando la varibale \"<b>activo</b>\" que se encargaran de mostrar\r\n  el primer parrafo o el segundo. Los botones inferiores se encargaran de ir cambiando la variable \"<b>fondo</b>\" que se encargaran\r\n  de cambiar el color de fondo de los parrafos.\r\n</p>\r\n<div class=\"my-3\">\r\n  <button class=\"btn btn-warning\" (click)=\"activo='primero'\">Primero</button>\r\n  <button class=\"btn btn-warning ml-3\" (click)=\"activo='segundo'\">Segundo</button>\r\n</div>\r\n\r\n<p class=\"text-info d-none\" [ngClass]=\"{\r\n        'd-block':activo=='primero',\r\n        'bg-dark':fondo=='dark',\r\n        'bg-white':fondo=='white'\r\n    }\">\r\n  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque aliquid ipsam cumque animi non nulla vitae,\r\n  assumenda ad architecto aut exercitationem vero aspernatur quia autem, facere illo dolorum dignissimos?\r\n</p>\r\n<p class=\"text-danger d-none\" [ngClass]=\"{\r\n        'd-block':activo=='segundo',\r\n        'bg-dark':fondo=='dark',\r\n        'bg-white':fondo=='white'\r\n    }\">\r\n  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id possimus totam,\r\n  blanditiis vero reprehenderit excepturi odit optio fugiat rerum. Optio laboriosam unde, alias minima hic id\r\n  velit\r\n  est? Animi, reprehenderit.\r\n</p>\r\n\r\n\r\n\r\n<button class=\"btn btn-dark\" (click)=\"fondo='dark'\">Background Dark</button>\r\n<button class=\"btn btn-white ml-3 border border-dark\" (click)=\"fondo='white'\">Background white</button>\r\n\r\n<pre class=\"border border-dark bg-light my-5\">\r\n\r\n  &lt;div class=\"my-3\"&gt;\r\n    &lt;button class=\"btn btn-warning\" <b>(click)=\"activo='primero'\"</b>&gt;Primero&lt;/button&gt;\r\n    &lt;button class=\"btn btn-warning ml-3\" <b>(click)=\"activo='segundo'\"</b>&gt;Segundo&lt;/button&gt;\r\n  &lt;/div&gt;\r\n\r\n  &lt;p class=\"text-info d-none\" <b>[ngClass]=\"\r\n          'd-block':activo=='primero',\r\n          'bg-dark':fondo=='dark',\r\n          'bg-white':fondo=='white'\r\n      \"</b>&gt;\r\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque aliquid ipsam cumque animi non nulla vitae,\r\n    assumenda ad architecto aut exercitationem vero aspernatur quia autem, facere illo dolorum dignissimos?\r\n  &lt;/p&gt;\r\n  &lt;p class=\"text-danger d-none\" <b>[ngClass]=\"\r\n          'd-block':activo=='segundo',\r\n          'bg-dark':fondo=='dark',\r\n          'bg-white':fondo=='white'\r\n      \"</b>&gt;\r\n    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id possimus totam,\r\n    blanditiis vero reprehenderit excepturi odit optio fugiat rerum. Optio laboriosam unde, alias minima hic id\r\n    velit\r\n    est? Animi, reprehenderit.\r\n  &lt;/p&gt;\r\n\r\n  &lt;button class=\"btn btn-dark\" <b>(click)=\"fondo='dark'\"</b>&gt;Background Dark&lt;/button&gt;\r\n  &lt;button class=\"btn btn-white ml-3 border border-dark\" <b>(click)=\"fondo='white'\"</b>&gt;Background white&lt;/button&gt;\r\n\r\n</pre>"

/***/ }),

/***/ "./src/app/ngclass/ngclass.component.sass":
/*!************************************************!*\
  !*** ./src/app/ngclass/ngclass.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nY2xhc3MvbmdjbGFzcy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/ngclass/ngclass.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ngclass/ngclass.component.ts ***!
  \**********************************************/
/*! exports provided: NgclassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgclassComponent", function() { return NgclassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgclassComponent = /** @class */ (function () {
    function NgclassComponent() {
    }
    NgclassComponent.prototype.ngOnInit = function () {
    };
    NgclassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngclass',
            template: __webpack_require__(/*! ./ngclass.component.html */ "./src/app/ngclass/ngclass.component.html"),
            styles: [__webpack_require__(/*! ./ngclass.component.sass */ "./src/app/ngclass/ngclass.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgclassComponent);
    return NgclassComponent;
}());



/***/ }),

/***/ "./src/app/ngfor/ngfor.component.html":
/*!********************************************!*\
  !*** ./src/app/ngfor/ngfor.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"bg-dark text-white text-center my-4 py-4\">*ngFor</h1>\r\n\r\n<p class=\"alert alert-secondary\">\r\n  Usamos \"<b>*ngFor</b>\" para iterar por el array \"<b>animales</b>\" el cual tiene tres objetos con las propiedades\r\n  \"<b>tipo</b>\", \"<b>nombre</b>\", \"<b>edad</b>\", para ello escribimos \"<b>let animal of animales</b>\". Tambien a modo opcional podemos obetener el index de cada uno con\r\n  \"<b>index as i</b>\".\r\n</p>\r\n\r\n<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\">TIPO</th>\r\n      <th scope=\"col\">NOMBRE</th>\r\n      <th scope=\"col\">EDAD</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let animal of animales; index as i\">\r\n      <th scope=\"row\">{{i+1}}</th>\r\n      <td>{{animal.tipo}}</td>\r\n      <td>{{animal.nombre}}</td>\r\n      <td>{{animal.edad}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<pre class=\"border border-dark bg-light my-5\">\r\n\r\n  &lt;table class=\"table\"&gt;\r\n    &lt;thead&gt;\r\n      &lt;tr&gt;\r\n        &lt;th scope=\"col\"&gt;#&lt;/th&gt;\r\n        &lt;th scope=\"col\"&gt;TIPO&lt;/th&gt;\r\n        &lt;th scope=\"col\"&gt;NOMBRE&lt;/th&gt;\r\n        &lt;th scope=\"col\"&gt;EDAD&lt;/th&gt;\r\n      &lt;/tr&gt;\r\n    &lt;/thead&gt;\r\n    &lt;tbody&gt;\r\n      &lt;tr <b>*ngFor=\"let animal of animales; index as i\"</b>&gt;\r\n        &lt;th scope=\"row\"&gt;<b>i+1</b>&lt;/th&gt;\r\n        &lt;td&gt;<b>animal.tipo</b>&lt;/td&gt;\r\n        &lt;td&gt;<b>animal.nombre</b>&lt;/td&gt;\r\n        &lt;td&gt;<b>animal.edad</b>&lt;/td&gt;\r\n      &lt;/tr&gt;\r\n    &lt;/tbody&gt;\r\n  &lt;/table&gt;\r\n\r\n</pre>\r\n"

/***/ }),

/***/ "./src/app/ngfor/ngfor.component.sass":
/*!********************************************!*\
  !*** ./src/app/ngfor/ngfor.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nZm9yL25nZm9yLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/ngfor/ngfor.component.ts":
/*!******************************************!*\
  !*** ./src/app/ngfor/ngfor.component.ts ***!
  \******************************************/
/*! exports provided: NgforComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgforComponent", function() { return NgforComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgforComponent = /** @class */ (function () {
    function NgforComponent() {
        this.animales = [
            { tipo: 'Perro', nombre: 'Lisa', edad: '10' },
            { tipo: 'Gato', nombre: 'Rufus', edad: '13' },
            { tipo: 'Pato', nombre: 'Pedro', edad: '20' }
        ];
    }
    NgforComponent.prototype.ngOnInit = function () {
    };
    NgforComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngfor',
            template: __webpack_require__(/*! ./ngfor.component.html */ "./src/app/ngfor/ngfor.component.html"),
            styles: [__webpack_require__(/*! ./ngfor.component.sass */ "./src/app/ngfor/ngfor.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgforComponent);
    return NgforComponent;
}());



/***/ }),

/***/ "./src/app/ngif/ngif.component.html":
/*!******************************************!*\
  !*** ./src/app/ngif/ngif.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"bg-dark text-white text-center my-4 py-4\">*ngIf show = {{show}}</h1>\r\n<p class=\"alert alert-secondary\">Usamos el condicional de Angular con <b>\"*ngIf\"</b> en el tag que queramos, para que cuando se cumpla la condicion indicada\r\nse muestre. Tambien tenemos la opcion de aplicarle un else para que pinte un tag alternativo al cual tenemos que indicarle con un nomnbre\r\npara que pueda identificarlo.</p>\r\n<button class=\"btn btn-warning mb-3\" (click)=\"show=!show\">Action</button>\r\n\r\n<p class=\"text-info\" *ngIf=\"show; else showDos\">\r\n  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque aliquid ipsam cumque animi non nulla vitae,\r\n  assumenda ad architecto aut exercitationem vero aspernatur quia autem, facere illo dolorum dignissimos?\r\n</p>\r\n<ng-template #showDos>\r\n  <p class=\"text-danger\">\r\n    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id possimus totam,\r\n    blanditiis vero reprehenderit excepturi odit optio fugiat rerum. Optio laboriosam unde, alias minima hic id\r\n    velit\r\n    est? Animi, reprehenderit.\r\n  </p>\r\n</ng-template>\r\n<pre class=\"border border-dark bg-light my-5\">\r\n\r\n   &lt;button class=\"btn btn-warning mb-3\" <b>(click)=\"show=!show\"</b>&gt;Action &lt;/button&gt;\r\n\r\n   &lt;p class=\"text-info\" <b>*ngIf=\"show; else showDos\"</b>&gt;\r\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque aliquid ipsam cumque animi non nulla vitae,\r\n    assumenda ad architecto aut exercitationem vero aspernatur quia autem, facere illo dolorum dignissimos?\r\n   &lt;/p&gt;\r\n\r\n    <b>&lt;ng-template #showDos&gt;</b>\r\n     &lt;p class=\"text-danger\"&gt;\r\n      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id possimus totam,\r\n      blanditiis vero reprehenderit excepturi odit optio fugiat rerum. Optio laboriosam unde, alias minima hic id\r\n      velit\r\n      est? Animi, reprehenderit.\r\n     &lt;/p&gt;\r\n    <b>&lt;/ng-template&gt;</b>\r\n\r\n</pre>"

/***/ }),

/***/ "./src/app/ngif/ngif.component.sass":
/*!******************************************!*\
  !*** ./src/app/ngif/ngif.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25naWYvbmdpZi5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/ngif/ngif.component.ts":
/*!****************************************!*\
  !*** ./src/app/ngif/ngif.component.ts ***!
  \****************************************/
/*! exports provided: NgifComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgifComponent", function() { return NgifComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgifComponent = /** @class */ (function () {
    function NgifComponent() {
    }
    NgifComponent.prototype.ngOnInit = function () {
    };
    NgifComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngif',
            template: __webpack_require__(/*! ./ngif.component.html */ "./src/app/ngif/ngif.component.html"),
            styles: [__webpack_require__(/*! ./ngif.component.sass */ "./src/app/ngif/ngif.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgifComponent);
    return NgifComponent;
}());



/***/ }),

/***/ "./src/app/rutasyservicios/rutasyservicios.component.html":
/*!****************************************************************!*\
  !*** ./src/app/rutasyservicios/rutasyservicios.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"bg-dark text-white text-center my-4 py-4\">Rutas Dinamicas y Servicios</h1>\r\n<p class=\"alert alert-secondary\">\r\n  Los servios nos sirven para consumir informacion que este disponible en todo nuestro sitio web, en este caso usamos \"<b>ngFor</b>\"\r\n  para acceder a un servicio externo llamado \"<b>equipo</b>\".<br><br>\r\n  Para ello se ha creado el servicio \"<b>equipo.service</b>\", donde hemos creado los datos y se ha creado una funcion llamada\r\n  \"<b>obtenerEquipo()</b>\" para devolver todos sus datos.<br><br>\r\n  \r\n  Este servicio se ha importado en \"<b>rutasyservicios.ts</b>\" \r\n  y se ha llamado desde aqui a la funcion \"<b>obtenerEquipo()</b>\".<br><br>\r\n\r\n  Por otro lado hemos utilizado \"<b>[routerLink]=\"['/detalleequipo',i]\"</b>\" en el enlace para hacer rutas dinamicas.<br><br>\r\n\r\n  Para realizar estas rutas dinamicas hemos tenido que importar en el \"<b>app.module.ts</b>\" el componente\r\n  \"<b>RouterModule</b>\"\r\n  y \"<b>Routes</b>\" desde \"<b>@angular/router</b>\".<br><br>\r\n  \r\n  Se ha declarado un array \"<b>routes</b>\" conteniendo este, el array importado \"<b>Routes</b>\" y añadiendo todas\r\n  las rutas necesarias en forma de objetos.<br><br>\r\n  \r\n  Entre ellas se define la dinamica la cual definimos \"<b>path: 'detalleequipo/:id', component:\r\n    DetalleequipoComponent</b>\".\r\n  \r\n  Finalmente en el \"<b>@NgModules</b>\" añadimos en \"<b>imports</b>\" el metedo con la variable que hemos definido de rutas\r\n  \"<b>RouterModule.forRoot(routes)</b>\"\r\n</p>\r\n\r\n<ul class=\"list-group\">\r\n  <li class=\"list-group-item\" *ngFor=\"let item of equipo, index as i\">\r\n    <h6>Nombre: {{item.nombre}}</h6>\r\n    <h6>Especialidad: {{item.especialidad}}</h6>\r\n    <a [routerLink]=\"['/detalleequipo',i]\">Leer más...</a>\r\n  </li>\r\n</ul>\r\n\r\n<pre class=\"border border-dark bg-light my-5\">\r\n\r\n   &lt;ul class=\"list-group\"&gt;\r\n     &lt;li class=\"list-group-item\" <b>*ngFor=\"let item of equipo, index as i\"</b>&gt;\r\n       &lt;h6&gt;Nombre: <b>item.nombre</b> &lt;/h6&gt;\r\n       &lt;h6&gt;Especialidad: <b>item.especialidad</b> &lt;/h6&gt;\r\n       &lt;a <b>[routerLink]=\"['/detalleequipo',i]\"</b>&gt;Leer más... &lt;/a&gt;\r\n     &lt;/li&gt;\r\n   &lt;/ul&gt;\r\n\r\n</pre>"

/***/ }),

/***/ "./src/app/rutasyservicios/rutasyservicios.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/rutasyservicios/rutasyservicios.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1dGFzeXNlcnZpY2lvcy9ydXRhc3lzZXJ2aWNpb3MuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/rutasyservicios/rutasyservicios.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/rutasyservicios/rutasyservicios.component.ts ***!
  \**************************************************************/
/*! exports provided: RutasyserviciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasyserviciosComponent", function() { return RutasyserviciosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _equipo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../equipo.service */ "./src/app/equipo.service.ts");



var RutasyserviciosComponent = /** @class */ (function () {
    function RutasyserviciosComponent(_servicio) {
        this._servicio = _servicio;
        this.equipo = [];
        this.equipo = _servicio.obtenerEquipo();
    }
    RutasyserviciosComponent.prototype.ngOnInit = function () {
    };
    RutasyserviciosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rutasyservicios',
            template: __webpack_require__(/*! ./rutasyservicios.component.html */ "./src/app/rutasyservicios/rutasyservicios.component.html"),
            styles: [__webpack_require__(/*! ./rutasyservicios.component.sass */ "./src/app/rutasyservicios/rutasyservicios.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_equipo_service__WEBPACK_IMPORTED_MODULE_2__["EquipoService"]])
    ], RutasyserviciosComponent);
    return RutasyserviciosComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\learning\angulartest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map