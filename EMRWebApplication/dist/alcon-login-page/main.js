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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/XhrInterceptor.ts":
/*!***********************************!*\
  !*** ./src/app/XhrInterceptor.ts ***!
  \***********************************/
/*! exports provided: XhrInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrInterceptor", function() { return XhrInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var XhrInterceptor = (function () {
    function XhrInterceptor(router) {
        this.router = router;
    }
    XhrInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr).catch(function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                switch (err.status) {
                    case 302:
                    case 401:
                        _this.router.navigate(['']);
                        break;
                    default:
                }
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
        });
        ;
    };
    XhrInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], XhrInterceptor);
    return XhrInterceptor;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertsContainer .alertsRow .iconpanel{\r\n    float:left;\r\n    width:50px !important;\r\n    padding:15px;\r\n    text-align:center;\r\n    height:51px !important;\r\n}\r\n.alertsContainer .alertsRow .messagepanel{\r\n    float:left;\r\n    height:51px !important;\r\n    padding:20px;\r\n    text-align:left;\r\n    max-width:353px;\r\n    width:350px\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div  class=\"col-sm-12\">  \r\n  <app-login></app-login>\r\n  </div> -->\r\n<div>\r\n    <app-alerts>\r\n    </app-alerts>\r\n    <router-outlet></router-outlet>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constant.ts":
/*!*********************************!*\
  !*** ./src/app/app.constant.ts ***!
  \*********************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Configuration = (function () {
    function Configuration() {
        this.Server = 'http://localhost:8080';
        //public Server = 'http://naus00067310:777/';
        this.LoginToken = this.Server + '/save';
    }
    Configuration = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Configuration);
    return Configuration;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _XhrInterceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./XhrInterceptor */ "./src/app/XhrInterceptor.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _services_mock_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/mock.auth.service */ "./src/app/services/mock.auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["Routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertsModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"]
            ],
            exports: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _XhrInterceptor__WEBPACK_IMPORTED_MODULE_15__["XhrInterceptor"], multi: true },
                _login_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"],
                _app_constant__WEBPACK_IMPORTED_MODULE_13__["Configuration"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                _services_home_service__WEBPACK_IMPORTED_MODULE_16__["HomeService"],
                _services_mock_auth_service__WEBPACK_IMPORTED_MODULE_17__["mockauthservice"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");



var appRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n\ttext-align: center;\r\n    padding: 20px 0;\r\n    font-size: 20px;\r\n    font-family: 'MyriadWebPro';\r\n    font-weight: bold;\r\n    color: #0460A9;\r\n    border-top: 3px solid #7ca3dc;\r\n    background-color: white;\r\n    padding-left: 0%;\r\n    padding-bottom: 0%;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>Copyright &copy; Alcon</footer>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\r\n    padding: 13px;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/EmrLists.ts":
/*!**********************************!*\
  !*** ./src/app/home/EmrLists.ts ***!
  \**********************************/
/*! exports provided: EmrLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmrLists", function() { return EmrLists; });
var EmrLists = (function () {
    function EmrLists() {
    }
    return EmrLists;
}());

// export class EmrLists {
//     configId : number;
//     title: string;
//     host: string;
//     port:number;
//     isActive: boolean;
//     isPrimary:boolean;
//     constructor(
//       _configId:number,
//       _title:string,
//       _host:string,
//       _port:number,
//       _isActive:boolean,
//       _isPrimary:boolean
//     ){
//          this.configId = _configId;
//          this.title=_title;
//          this.host=_host;
//          this.port=_port;
//          this.isActive=_isActive;
//          this.isPrimary=_isPrimary;
//     }
// }


/***/ }),

/***/ "./src/app/home/Hl7Config.ts":
/*!***********************************!*\
  !*** ./src/app/home/Hl7Config.ts ***!
  \***********************************/
/*! exports provided: Hl7Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hl7Config", function() { return Hl7Config; });
var Hl7Config = (function () {
    function Hl7Config() {
        this.version = "2.5.1";
    }
    return Hl7Config;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*for table padding and its border*/\r\nth, td {\r\n    /* border-top: 1px solid black;\r\n    border-bottom: 1px solid black; */\r\n    vertical-align: middle !important;\r\n    text-align: center;\r\n    font-family: 'Verdana';\r\n    font-weight: lighter !important; \r\n}\r\ntr{\r\n    padding: 10%;\r\n    font-size: 0.85rem !important;\r\n    font-weight: 0; \r\n    line-height: 1;\r\n}\r\n/* border for the starting of the table*/\r\n.brd1{\r\n    border-top:double; \r\n    border-color: #006BB1;\r\n    border-bottom:double; \r\n    border-color: #006BB1;\r\n}\r\n.brd2{\r\n    border:solid; \r\n    border-color: #0460A9; \r\n    border-radius: 15px; \r\n    padding: 1%;\r\n    margin: 2%;\r\n}\r\n.floating{\r\n    float: right;\r\n}\r\n.text-align{\r\n    text-align: left !important;\r\n}\r\n/*for table top and bottom border*/\r\ntable {\r\n    /* border-top: 1px solid black;\r\n    border-bottom: 1px solid black; */\r\n    width: 99%;\r\n    border-spacing: 15px !important;\r\n    margin-bottom: 0rem !important;\r\n}\r\n/*for heading of the elements and its border*/\r\nthead{\r\n    /* border-top: 1px solid black;\r\n    border-bottom: 1px solid black; */\r\n    font-size: 0.85rem !important;\r\n    line-height: 1 !important;\r\n    padding: 10px;  \r\n    font-family: 'Verdana';\r\n    background-color: #0460A9;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n/*for title dashboard*/\r\n.title{\r\n    font-size: 30px;\r\n    color: white;   \r\n   }\r\n.titleHeader{\r\n    padding-left:1%; background-color:#006BB1; height: 160px;\r\n    \r\n}\r\n/*for the alcon logo*/\r\n.image{\r\n    /*border: 1px solid #ccc;*/\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    margin: 10px 10px 10px 0;\r\n    position: relative;\r\n    height: 160px;\r\n    padding: 5px;    \r\n}\r\n.spectrumRowHeight{\r\n    height: 8px;\r\n}\r\n.spectrumImageWidth{\r\n    width: 100%;\r\n}\r\n.ConfigurationBackground{\r\n    background-image:url(\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBgcHBw0RBwcGBwwPBwcHDREICQcWFBEWFhQRFB8YHCggGBolGxQTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDAwMDgwPFSwcHxkrKysrKysrLCsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAgEG/8QAFRABAQAAAAAAAAAAAAAAAAAAABH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIGBf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDswHQPFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoisGgMGgMGgMGgMGgMGgMGgMGgMGgMGgMGgMGgMGgMGgMGgMGgNhFQiVUwioQomEVCFEwioQomEVCFEwioQomEVCFEwioQomEVCFEwioQomEVCFEwioQomEVCFEwioQomEVCFEwioQomCoFFQi4RiqiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFERqoFFwioRmtJhFQhRMIqEKJhFQiUTCKhFomEVCJRMIqEWiYRUIlEwioQomEVCLRMIqEKJhFQhRMIqEKJhFQiUTCKhFomEVCFEwVGpSKhFwjNaRCLhCiIRcIURCLhCiIRcIURCLhCiIRcIURCLhCiIRcIURCLhCiIRcIURCLhCiIRcIURCLhCiIRcIURCLhCiILgUXCKhGKqYRUIVUwioQomEVCFRMIqEKJhFQhVTCKhCiYRUIVEwioQomEVCFEwioQqphFQhRMIqEKiYRUIUTCKhCqmEVCFEwVAouEXCMVUQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiC4FFQioRmtJhFQhRMIqEKJhFQhRMIqEKJhFQhRMIqEKJhFQhRMIqEKJhFQhRMIqEKJhFQhRMIqEKJhFQhRMIqEKJhFQhRMFQKKFMZVgpgMGtBIpgMGtBI0Bg1oJFMBgpgMFMBg1oJFMBg0Bg1oJGgMFMBg1oACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=\");\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.headerTextAlign{\r\n    margin: auto;\r\n}\r\n.image:hover {\r\n    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\r\n}\r\n/*for thr hyperlinks*/\r\n.hl{\r\n    text-decoration: underline;\r\n    padding-left:2%;\r\n    padding-right: 2%;\r\n    padding-top: 10%;\r\n    font-size: 15px;\r\n    font-family: Verdana !important;\r\n    font-weight: 1000 !important;\r\n    outline: 0px !important;\r\n}\r\na.four:visited {\r\n    color:#0460A9;\r\n}\r\na.four:hover {\r\n    color:blue;\r\n}\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width:  46px;\r\n    height: 24px;\r\n  }\r\n/* Hide default HTML checkbox */\r\n.switch input{\r\n      display:none;\r\n    }\r\n/* The slider */\r\n.slider {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: -10px;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n  }\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 16px;\r\n    width: 16px;\r\n    left: 2px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\ninput.default:checked + .slider {\r\n    background-color: #0460A9;\r\n  }\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    -ms-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n/* Rounded sliders */\r\n.slider.round {\r\n    border-radius: 34px;\r\n  }\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n/*for page border*/\r\n.page{\r\n /* overflow: hidden; */\r\n    background-image:url(\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBgcHBw0RBwcGBwwPBwcHDREICQcWFBEWFhQRFB8YHCggGBolGxQTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDAwMDgwPFSwcHxkrKysrKysrLCsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAgEG/8QAFRABAQAAAAAAAAAAAAAAAAAAABH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIGBf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDswHQPFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoisGgMGgMGgMGgMGgMGgMGgMGgMGgMGgMGgMGgMGgMGgMGgMGgNhFQiVUwioQomEVCFEwioQomEVCFEwioQomEVCFEwioQomEVCFEwioQomEVCFEwioQomEVCFEwioQomEVCFEwioQomCoFFQi4RiqiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFERqoFFwioRmtJhFQhRMIqEKJhFQiUTCKhFomEVCJRMIqEWiYRUIlEwioQomEVCLRMIqEKJhFQhRMIqEKJhFQiUTCKhFomEVCFEwVGpSKhFwjNaRCLhCiIRcIURCLhCiIRcIURCLhCiIRcIURCLhCiIRcIURCLhCiIRcIURCLhCiIRcIURCLhCiIRcIURCLhCiILgUXCKhGKqYRUIVUwioQomEVCFRMIqEKJhFQhVTCKhCiYRUIVEwioQomEVCFEwioQqphFQhRMIqEKiYRUIUTCKhCqmEVCFEwVAouEXCMVUQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiEXCFEQi4QoiC4FFQioRmtJhFQhRMIqEKJhFQhRMIqEKJhFQhRMIqEKJhFQhRMIqEKJhFQhRMIqEKJhFQhRMIqEKJhFQhRMIqEKJhFQhRMFQKKFMZVgpgMGtBIpgMGtBI0Bg1oJFMBgpgMFMBg1oJFMBg0Bg1oJGgMFMBg1oACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=\");\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n/*  Radio Button CSS */\r\n.radio-container {\r\n    position: relative;\r\n    padding-left: 25px;\r\n    margin-bottom: 10px;\r\n    font-size: 22px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n/* Hide the browser's default radio button */\r\n.radio-container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n}\r\n/* Create a custom radio button */\r\n.checkmark {\r\n    position: absolute;\r\n    top: -4px;\r\n    left: 0;\r\n    height: 18px;\r\n    width: 18px;\r\n    background-color: #eee;\r\n    border-radius: 50%;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.radio-container:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n}\r\n/* When the radio button is checked, add a blue background */\r\n.radio-container input:checked ~ .checkmark {\r\n    background-color: #0460A9;\r\n}\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n/* Show the indicator (dot/circle) when checked */\r\n.radio-container input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n/* Style the indicator (dot/circle) */\r\n.radio-container .checkmark:after {\r\n \ttop: 6px;\r\n\tleft: 6px;\r\n\twidth: 6px;\r\n\theight: 6px;\r\n\tborder-radius: 50%;\r\n\tbackground: white;\r\n}\r\n/* checkbox css starts here*/\r\n.container1 {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 22px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n/* Hide the browser's default checkbox */\r\n.container1 input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n/* Create a custom checkbox */\r\n.checkmark1 {\r\n    position: absolute;\r\n    top: -4px;\r\n    left: 40px;\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: #eee;\r\n  }\r\n/* On mouse-over, add a grey background color */\r\n.container1:hover input ~ .checkmark1 {\r\n    background-color: #ccc;\r\n  }\r\n/* When the checkbox is checked, add a blue background */\r\n.container1 input:checked ~ .checkmark1 {\r\n    background-color: #0460A9;\r\n  }\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark1:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n  }\r\n/* Show the checkmark when checked */\r\n.container1 input:checked ~ .checkmark1:after {\r\n    display: block;\r\n  }\r\n/* Style the checkmark/indicator */\r\n.container1 .checkmark1:after {\r\n    left: 8px;\r\n    top: 5px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n.add-isprimary-radio{\r\n    padding: 0 !important;\r\n}\r\n.add-btn-margine{\r\n    margin-right: 2em !important;\r\n    padding: 8px 30px !important;\r\n}\r\n/* for logout icon*/\r\n.img1{\r\n    cursor: pointer; \r\n    width:3em; \r\n    height:2em;\r\n}\r\n/* for edit icon*/\r\n.img2{\r\n    cursor: pointer;\r\n}\r\n/* for button style*/\r\nbutton {\r\n    background-color: #0460A9;\r\n    color: white;\r\n    padding: 8px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: auto;\r\n    font-family: 'Verdana';\r\n    font-size: 15px;\r\n    outline: 0px auto -webkit-focus-ring-color !important;\r\n}\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n.btn-border-style{\r\n    box-shadow: 0 0 0 0rem rgba(0,123,255,.5) !important;\r\n}\r\n.svg-border-style{\r\n    background-color: transparent\r\n}\r\n/*popup center align and background colour*/\r\n.popup{\r\nmargin: 0;\r\ntop: 50%;\r\nposition: absolute;\r\nleft: 50%;\r\n-webkit-transform: translate(-50%,-50%);\r\n    -ms-transform: translate(-50%,-50%);\r\n        transform: translate(-50%,-50%); \r\noverflow: hidden;\r\n}\r\n.btn-primary:disabled {\r\n    color: white !important;\r\n    background-color: #0460A9 !important;\r\n    border-color: #0460A9 !important;\r\n}\r\n.logout-button-background{\r\n    enable-background:new 0 0 488 488;\r\n}\r\n.edit-button-position{\r\n    padding: 0rem !important;\r\n }\r\n.grid-delete-button{\r\n    box-shadow: 0px !important\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row titleHeader\">\r\n        <div class=\"col-md-4\">\r\n            <img class=\"image\" src=\"assets/img/AlconLogo.png\">\r\n        </div>\r\n        <div class=\"col-md-8 headerTextAlign\">\r\n            <span class=\"align-middle title \"> EMR and Gateway Configuration </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row spectrumRowHeight\">\r\n        <img class=\"spectrumImageWidth\" src=\"assets/img/Spectrum.png\">\r\n    </div>\r\n    <!-- <div class=\"ConfigurationBackground\"> -->\r\n        <div class=\"brd1\">\r\n            <table>\r\n                <tr>\r\n                    <td class = \"text-align\">\r\n                        <span>\r\n                            <a class=\"hl four\" (click)=\"editConfigClickEvent(config)\" href=\"#\" data-toggle=\"modal\"\r\n                                data-target=\"#HL7ConfigPopup\">HL7 Config</a>\r\n                        </span>\r\n                    </td>\r\n\r\n                    <td class = \"floating\">\r\n                        <svg (click)=\"logoutFunction()\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\r\n                            id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 488 488\" xml:space=\"preserve\"\r\n                            class=\"img1 logout-button-background\">\r\n                            <g>\r\n                                <g>\r\n                                    <g>\r\n                                        <path d=\"M59,226.05H18c-9.9,0-18,8.1-18,18c0,9.9,8.1,18,18,18h41c9.9,0,18-8.1,18-18C77,234.15,69,226.05,59,226.05z\" data-original=\"#000000\"\r\n                                            class=\"active-path\" data-old_color=\"#0044FF\" fill=\"#FF0000\" />\r\n                                    </g>\r\n                                </g>\r\n                                <g>\r\n                                    <g>\r\n                                        <path d=\"M381.7,231.35l-106-106c-7-7-18.4-7-25.5,0c-7.1,7-7,18.4,0,25.5l75.3,75.3H130.4c-9.9,0-18,8.1-18,18c0,9.9,8.1,18,18,18    h195.1l-75.3,75.3c-7,7-7,18.4,0,25.5c3.5,3.5,8.1,5.3,12.7,5.3c4.6,0,9.2-1.8,12.7-5.3l106-106    C388.7,249.75,388.7,238.35,381.7,231.35z\"\r\n                                            data-original=\"#000000\" class=\"active-path\" data-old_color=\"#0044FF\" fill=\"#FF0000\"\r\n                                        />\r\n                                    </g>\r\n                                </g>\r\n                                <g>\r\n                                    <g>\r\n                                        <path d=\"M470,33.75H351.4c-9.9,0-18,8.1-18,18c0,9.9,8.1,18,18,18H452v348.5H351.4c-9.9,0-18,8.1-18,18c0,9.9,8.1,18,18,18H470    c9.9,0,18-8.1,18-18V51.75C488,41.85,479.9,33.75,470,33.75z\"\r\n                                            data-original=\"#000000\" class=\"active-path\" data-old_color=\"#0044FF\" fill=\"#FF0000\"\r\n                                        />\r\n                                    </g>\r\n                                </g>\r\n                            </g>\r\n                        </svg>\r\n                    </td>\r\n                </tr>\r\n\r\n            </table>\r\n        </div>\r\n        <div class =\"brd2\">\r\n            <div>\r\n                <table align=\"center\" class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th></th>\r\n                            <th>Title</th>\r\n                            <th>IP Address</th>\r\n                            <th>Port</th>\r\n                            <th>Is Active</th>\r\n                            <th>Is Primary</th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let emr of emrlist; let i = index\">\r\n                            <td>\r\n                                <!-- <input type=\"checkbox\"  [(ngModel)]=\"emr.selected\"> -->\r\n                                <label class=\"container1\">\r\n                                    <input type=\"checkbox\" [(ngModel)]=\"emr.selected\" (change)=\"onCheckboxSelectionChange(emr)\">\r\n                                    <span class=\"checkmark1\"></span>\r\n                                </label>\r\n                            </td>\r\n                            <td>{{emr.title}}</td>\r\n                            <td>{{emr.host}}</td>\r\n                            <td>{{emr.port}}</td>\r\n                            <td>\r\n                                <label class=\"switch \">\r\n                                    <input type=\"checkbox\" class=\"default\" [(ngModel)]=\"emr.isActive\" [disabled]=\"true\">\r\n                                    <span class=\"slider round\"></span>\r\n                                </label>\r\n\r\n                            </td>\r\n                            <td>\r\n                                <label class=\"radio-container\">\r\n                                    <input type=\"radio\" name=\"emr-radio\" [checked]=\"emr.isPrimary\" [attr.disabled]=\"isDisabledState === true\">\r\n                                    <span class=\"checkmark\"></span>\r\n                                </label>\r\n                            </td>\r\n                            <td class=\"edit-button-position\">\r\n                                <button (click)=\"editClickEvent(emr)\" class=\"svg-border-style\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 129 129\" enable-background=\"new 0 0 129 129\"\r\n                                        width=\"30px\" height=\"25px\" class=\"img2\">\r\n                                        <g>\r\n                                            <g>\r\n                                                <g>\r\n                                                    <path d=\"m119.2,114.3h-109.4c-2.3,0-4.1,1.9-4.1,4.1s1.9,4.1 4.1,4.1h109.5c2.3,0 4.1-1.9 4.1-4.1s-1.9-4.1-4.2-4.1z\" data-original=\"#000000\"\r\n                                                        class=\"active-path\" data-old_color=\"#FBF4F4\" fill=\"#0460A9\" />\r\n                                                    <path d=\"m5.7,78l-.1,19.5c0,1.1 0.4,2.2 1.2,3 0.8,0.8 1.8,1.2 2.9,1.2l19.4-.1c1.1,0 2.1-0.4 2.9-1.2l67-67c1.6-1.6 1.6-4.2 0-5.9l-19.2-19.4c-1.6-1.6-4.2-1.6-5.9-1.77636e-15l-13.4,13.5-53.6,53.5c-0.7,0.8-1.2,1.8-1.2,2.9zm71.2-61.1l13.5,13.5-7.6,7.6-13.5-13.5 7.6-7.6zm-62.9,62.9l49.4-49.4 13.5,13.5-49.4,49.3-13.6,.1 .1-13.5z\"\r\n                                                        data-original=\"#000000\" class=\"active-path\" data-old_color=\"#FBF4F4\"\r\n                                                        fill=\"#0460A9\" />\r\n                                                </g>\r\n                                            </g>\r\n                                        </g>\r\n                                    </svg>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"row float-right col-md-3\">\r\n            <div class=\"col-sm-16\">\r\n                <button type=\"button\" (click)=\"clearAddpopup()\" class=\"btn btn-primary btn-lg add-btn-margine btn-border-style\" \r\n                    data-toggle=\"modal\" data-target=\"#myModal\">Add</button>\r\n                <button type=\"button\" [disabled]=\"buttonDisabled\" class=\"btn btn-primary btn-lg btn-border-style grid-delete-button\" \r\n                    data-toggle=\"modal\" data-target=\"#deletePopup\">Delete</button>\r\n            </div>\r\n\r\n        </div>\r\n    <!-- </div> -->\r\n</div>\r\n\r\n<!-- Add section-->\r\n\r\n<div class=\"modal fade popup\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{popupHeaderMessage}}</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"title-text-input\" class=\"col-3 col-form-label\">Title</label>\r\n                    <div class=\"col-9\">\r\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"emrlists.title\" id=\"title-text-input\" #title=\"ngModel\" required>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"ip-address-text-input\" class=\"col-3 col-form-label\">IP Address</label>\r\n                    <div class=\"col-9\">\r\n                        <input class=\"form-control\" type=\"text\" pattern=\"[0-9]*\" [(ngModel)]=\"emrlists.host\" id=\"ip-address-text-input\" #host=\"ngModel\"\r\n                            required>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"port-number-text-input\" class=\"col-3 col-form-label\">Port Number</label>\r\n                    <div class=\"col-9\">\r\n                        <input class=\"form-control\" type=\"number\" pattern=\"[0-9]*\" minlength=\"1\" maxlength=\"4\" [(ngModel)]=\"emrlists.port\" id=\"port-number-text-input\"\r\n                            required #port=\"ngModel\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-4\"></div>\r\n                    <label class=\"col-8 add-isprimary-radio\">\r\n                        <input type=\"checkbox\" name=\"popup-radio\" [(ngModel)]=\"emrlists.isActive\" class=\"form-check-input\" (change)=\"onActiveSelectionChange(emrlists)\"> Is Active\r\n                    </label>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-4\"></div>\r\n                    <label class=\"col-8 add-isprimary-radio\">\r\n                        <input type=\"checkbox\" name=\"popup-radio\" [(ngModel)]=\"emrlists.isPrimary\" class=\"form-check-input\" [disabled]=\"checkDisable\"> Is Primary\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"isAddbutton\" class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-border-style\" (click)=\"addnewEMR()\" data-dismiss=\"modal\">Add</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-border-style\" (click)=\"clearAddpopup()\">Clear</button>\r\n            </div>\r\n\r\n            <div *ngIf=\"!isAddbutton\" class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-border-style\" data-dismiss=\"modal\" (click)=\"cancelEditOption()\">Cancel</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-border-style\" (click)=\"saveEditChanges(emrlists)\" data-dismiss=\"modal\">Save changes</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Delete popup-->\r\n\r\n<div class=\"modal fade popup\" id=\"deletePopup\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Delete EMR</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"col-2\"></div>\r\n                <label class=\"col-8 add-isprimary-radio\">\r\n                    Are you sure you want to delete ?\r\n                </label>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-danger btn-border-style\" data-dismiss=\"modal\">No</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-border-style\" (click)=\"deleteEMR()\" data-dismiss=\"modal\">Yes</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- For edit config popup -->\r\n\r\n<div class=\"modal fade popup\" id=\"HL7ConfigPopup\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">HL7 Config</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"title-text-input\" class=\"col-3 col-form-label\">Engine</label>\r\n                    <div class=\"col-9\">\r\n                       \r\n                        \r\n                        <select type=\"number\" class=\"form-control\"  [(ngModel)]=\"selectedConfig\" id=\"title-text-input\">\r\n                                <option *ngFor=\"let configDetail of configlistDetails\" [ngValue]=\"configDetail\">{{configDetail.name}}</option>\r\n                              </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"ip-address-text-input\" class=\"col-3 col-form-label\">HL7 Version</label>\r\n                    <div class=\"col-9\">\r\n                        <input class=\"form-control\" type=\"text\" pattern=\"((25[0-5])|(2[0-4]\\d)|(1\\d\\d)|([1-9]?\\d))((^|\\.)((25[0-5])|(2[0-4]\\d)|(1\\d\\d)|([1-9]?\\d))){3}$  \"\r\n                            value = \"{{hl7Version}}\" id=\"ip-address-text-input\" readonly>\r\n                    </div>\r\n                </div>\r\n             \r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"reset\" class=\"btn btn-primary btn-border-style\" (click)=\"resetConfigOption()\">Reset</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-border-style\" (click)=\"saveConfigChanges(selectedConfig)\" data-dismiss=\"modal\">Save</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _EmrLists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmrLists */ "./src/app/home/EmrLists.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _Hl7Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hl7Config */ "./src/app/home/Hl7Config.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/home.service */ "./src/app/services/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(router, alerts, home) {
        this.router = router;
        this.alerts = alerts;
        this.home = home;
        this.emrlists = new _EmrLists__WEBPACK_IMPORTED_MODULE_1__["EmrLists"]();
        this.configlistDetail = new _Hl7Config__WEBPACK_IMPORTED_MODULE_3__["Hl7Config"]();
        this.hl7Version = "2.5.1";
        this.selectEmrList = new Array();
        this.isDisabledState = true;
        this.clearAddpopup();
        this.configitem = Object();
        this.buttonDisabled = true;
        this.checkDisable = true;
        this.noSelected = 0;
        this.isPrimaryRecord = false;
        this.ngOnInit();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.alerts.setDefaults('timeout',0);
        this.home.getEmrDetails().subscribe(function (result) {
            console.log("Data", result);
            _this.emrlist = result;
            console.log("Data", result);
        }, function (error) {
            console.error(error);
        });
        this.clearAddpopup();
        this.configitem = Object();
        this.buttonDisabled = true;
        this.noSelected = 0;
        this.checkDisable = true;
        this.isPrimaryRecord = false;
    };
    HomeComponent.prototype.addnewEMR = function () {
        var _this = this;
        if (this.emrlists.title == undefined && this.emrlists.host == undefined && this.emrlists.port == undefined) {
            this.alerts.setMessage('All the fields are required', 'error');
            return;
        }
        this.home.addnewEMR(this.emrlists)
            .subscribe(function (data) {
            _this.alerts.setMessage('Configurations saved successfully!', 'success');
            _this.ngOnInit();
        }, function (error) {
            console.error(error);
            _this.alerts.setMessage('Error while saving record', 'error');
        });
        debugger;
        this.emrlist.forEach(function (emr) {
            if (emr.isPrimary == true) {
                _this.emrlist.forEach(function (emr, index) {
                    if (emr.host == _this.emrlists.host) {
                        emr.isPrimary = true;
                    }
                    else {
                        emr.isPrimary = false;
                    }
                });
                debugger;
            }
        });
        this.clearAddpopup();
    };
    ;
    HomeComponent.prototype.deleteEMR = function () {
        var _this = this;
        this.selectEmrList.forEach(function (emr) {
            _this.home.deleteEMR(emr)
                .subscribe(function (data) {
                _this.emrlist = _this.emrlist.filter(_this.checkForValidDelete);
                _this.ngOnInit();
            });
        });
        this.ngOnInit();
        this.alerts.setMessage('deleted successfully!', 'success');
        this.ngOnInit();
    };
    ;
    HomeComponent.prototype.onPrimarySelectionChange = function (data) {
        this.emrlist.forEach(function (emr, index) {
            if (emr.host == data.host) {
                emr.isPrimary = true;
            }
            else {
                emr.isPrimary = false;
            }
        });
    };
    HomeComponent.prototype.clearAddpopup = function () {
        this.emrlists = new _EmrLists__WEBPACK_IMPORTED_MODULE_1__["EmrLists"]();
        this.popupHeaderMessage = "Add New EMR";
        this.isAddbutton = true;
    };
    HomeComponent.prototype.logoutFunction = function () {
        this.router.navigate(['']);
        this.alerts.setMessage('log out successfull', 'success');
    };
    HomeComponent.prototype.onActiveSelectionChange = function (data) {
        debugger;
        console.log(data);
        if (!data.isActive) {
            data.isPrimary = false;
            this.checkDisable = true;
        }
        else {
            this.checkDisable = false;
        }
    };
    HomeComponent.prototype.onCheckboxSelectionChange = function (data) {
        console.log(data);
        this.buttonDisabled = false;
        var enableFlag = false;
        if (data.selected) {
            this.selectEmrList.push(data);
            if (data.isPrimary == true) {
                this.isPrimaryRecord = true;
            }
            this.noSelected++;
        }
        else {
            this.selectEmrList.splice(this.selectEmrList.indexOf(data), 1);
            if (data.isPrimary == true) {
                this.isPrimaryRecord = false;
            }
            if (this.noSelected) {
                this.noSelected--;
            }
        }
        console.log(" this.selectEmrList", this.selectEmrList);
        this.emrlist.forEach(function (emr, index) {
            if (emr.host == data.ipAddress && emr.isPrimary == true && emr.configId == 0) {
                emr.configId = 0;
            }
        });
        this.enable();
        console.log(this.emrlist);
    };
    HomeComponent.prototype.enable = function () {
        this.buttonDisabled = false;
        if (this.noSelected) {
            if (this.isPrimaryRecord) {
                this.buttonDisabled = true;
            }
        }
        else {
            this.buttonDisabled = true;
        }
    };
    // local function for multi condition check for filter
    HomeComponent.prototype.checkForValidDelete = function (value, index, ar) {
        if (value.selected == true && value.isPrimary == false) {
            return false;
        }
        else {
            return true;
        }
    };
    HomeComponent.prototype.editClickEvent = function (data) {
        console.log(data);
        this.popupHeaderMessage = "Edit EMR";
        this.emrlists = Object.assign({}, data);
        if (this.emrlists.isActive === true) {
            this.checkDisable = false;
        }
        else {
            this.checkDisable = true;
        }
        this.isAddbutton = false;
    };
    HomeComponent.prototype.editConfigClickEvent = function (data) {
        var _this = this;
        console.log(data);
        this.popupHeaderMessage = "HL7 Config Details";
        this.tempConfigItem = data;
        this.home.getHL7Details().subscribe(function (result) {
            console.log("hl7", result);
            debugger;
            _this.configlistDetails = result;
            console.log("hl7", result);
            _this.configlistDetails.forEach(function (config) {
                config.version = "2.5.1";
                console.log(config.selected);
                if (config.selected === true) {
                    _this.selectedConfig = config;
                }
            });
            console.log("Display");
            console.log(_this.configlistDetails);
        }, function (error) {
            console.error(error);
        });
    };
    // edit 
    HomeComponent.prototype.cancelEditOption = function () {
        this.alerts.setMessage('Changes are not saved!', 'warn');
    };
    HomeComponent.prototype.resetConfigOption = function () {
        debugger;
        this.alerts.setMessage('Changes are not saved!', 'warn');
    };
    HomeComponent.prototype.saveEditChanges = function (emrlists) {
        var _this = this;
        debugger;
        console.log(emrlists);
        console.log("edit changes");
        this.home.updateDetails(emrlists).subscribe(function (result) {
            _this.ngOnInit();
            _this.alerts.setMessage('Changes saved successfully!', 'success');
        }, function (error) { });
    };
    HomeComponent.prototype.saveConfigChanges = function (configlistDetail) {
        var _this = this;
        debugger;
        console.log("edit changes", configlistDetail);
        this.home.updateHL7Details(configlistDetail).subscribe(function (result) {
            _this.alerts.setMessage('Changes saved successfully!', 'success');
        }, function (error) { });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertsService"], _services_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\r\n    /* background: url('/assets/img/AlconLoginBackground.jpg'); */\r\n    background-size: cover;\r\n    background-repeat:no-repeat;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n   /*  background-size: cover;\r\n    height: 100vh;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    padding: 0%;\r\n    border: 1px solid #ccc;\r\n    box-shadow: 0px 0px 40px #7ca3dc; */ \r\n}\r\n\r\n.image{\r\n    /*border: 1px solid #ccc;*/\r\n    width:96%; \r\n    padding-bottom: 30%;\r\n}\r\n\r\n.margin-bottom{\r\n    margin-bottom: 0% !important;\r\n}\r\n\r\n.text-align{\r\ntext-align: right;\r\n}\r\n\r\n.container {\r\n    padding: 6%;  \r\n    max-width: 100%;\r\n}\r\n\r\n.heading{\r\n    color: #0460A9;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-weight: bolder;\r\n    padding-bottom: 5%;\r\n}\r\n\r\n.info{\r\n    color: grey;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    font-family: 'Verdana';\r\n    padding-bottom: 20%;\r\n}\r\n\r\n.label{\r\n    color: grey;\r\n    font-size: 15px;\r\n    font-family: 'Verdana';\r\n}\r\n\r\n.margin{\r\n    /* margin-top: 10%;\r\n    margin-left: 65%;\r\n    margin-right: 2%;\r\n    margin-bottom: 20%; */\r\n    margin-top: 50%;\r\n    /* margin-left: -10%; */     \r\n}\r\n\r\n.paddingmargin{\r\n    padding-right: 5%;\r\n}\r\n\r\nbutton {\r\n    background-color: #0460A9;\r\n    color: white;\r\n    padding: 8px 22px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: auto;\r\n    font-family: 'Verdana';\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\ninput[type=email], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\" [ngStyle]=\"{'background-image' : 'url(./assets/img/AlconLoginBackground.jpg)'}\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 offset-md-8 paddingmargin\">\r\n      <form [formGroup]=\"myForm\" class=\"float-left login-form col-md-9 container margin border border-secondary\" novalidate>\r\n\r\n          <div class=\"label\">User Name</div>\r\n          <div class=\"form-group\" class=\"margin-bottom\">\r\n\r\n            <input type=\"email\" placeholder=\"Enter Username\" class=\"form-control\" formControlName=\"username\" autofocus>\r\n            <small [hidden]=\"myForm.controls.username.valid || (myForm.controls.username.pristine && !submitted)\" class=\"text-danger\">\r\n              Username is required\r\n            </small>\r\n          </div>\r\n          <div class=\"label\">Password</div>\r\n          <div class=\"form-group\" class=\"margin-bottom\">\r\n\r\n            <input type=\"password\" placeholder=\"Enter Password\" class=\"form-control\" formControlName=\"password\">\r\n            <small [hidden]=\"myForm.controls.password.valid || (myForm.controls.password.pristine  && !submitted)\" class=\"text-danger\">\r\n              Password is required\r\n            </small>\r\n          </div>\r\n          <div class=\"text-align\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-border-style \"  (click)=\"validateLogin()\">Login</button>\r\n            <button type=\"submit\" class=\"btn btn-secondary btn-border-style\"  (click)=\"clearLogin()\">Clear</button>\r\n          </div>\r\n       \r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, formBuilder, authService, alerts) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.alerts = alerts;
        this.events = [];
    }
    LoginComponent.prototype.validateLogin = function () {
        this.submitted = true;
        this.inValidUser = false;
        this.loginValidate(this.myForm.value.username, this.myForm.value.password);
        // this.authService.loginDetails(this.myForm.value.username, this.myForm.value.password).subscribe(
        //   (result) => {
        //     console.log("result", result);
        //     if (result['username'] != undefined) {
        //       this.router.navigate(['/Home'])
        //     }
        //     else {
        //       this.inValidUser = true;
        //       this.errorMessage = "Invalies Username/Password";
        //     }
        //   },
        //   (error) => {
        //     debugger;
        //     console.error(error);
        //     this.inValidUser = true;
        //     this.inValidUser = true;
        //     this.errorMessage = "Internal server error";
        //   }
        // );
        debugger;
    };
    LoginComponent.prototype.loginValidate = function (username, password) {
        var _this = this;
        this.authService.loginDetails(username, password).subscribe(function (result) {
            console.log("result", result);
            if (result['username'] != ((undefined) || (""))) {
                _this.router.navigate(['/Home']);
                _this.alerts.setMessage('log in successfull', 'success');
            }
            else {
                _this.inValidUser = true;
                _this.errorMessage = "Invalies Username/Password";
            }
        }, function (error) {
            debugger;
            console.error(error);
            _this.inValidUser = true;
            _this.inValidUser = true;
            _this.errorMessage = "Internal server error";
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.clearLogin();
    };
    LoginComponent.prototype.clearLogin = function () {
        debugger;
        this.myForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.menuVisible = false;
    }
    LoginService.prototype.login = function (userId, password) {
        var encodedPwd = encodeURIComponent(password);
        var params = "grant_type=password&username=" + userId + "&password=" + encodedPwd + "";
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'authorization': 'bearer ',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]();
        options.headers = header;
        return this.http.post(this.configuration.LoginToken, params, options)
            .map(function (response) {
            if (response.status === 200) {
                localStorage.setItem("token", JSON.stringify(response));
                /* var userDetails = JSON.parse(response.json().UserDetails)[0];
                this.loggedInUserName = userDetails.UserName;
                this.loogedinUserId = userDetails.UserId; */
                return response['_body'];
            }
        });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _app_constant__WEBPACK_IMPORTED_MODULE_2__["Configuration"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.loginDetails = function (username, password) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](username ? {
            authorization: 'Basic ' + btoa(username + ':' + password)
        } : {});
        return this.http.get("login", { headers: headers });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getEmrDetails = function () {
        return this.http.get("EMR");
    };
    HomeService.prototype.addnewEMR = function (emr) {
        return this.http.post("EMR", emr);
    };
    HomeService.prototype.deleteEMR = function (emr) {
        return this.http.delete("EMR/" + emr.configId);
    };
    HomeService.prototype.updateDetails = function (emr) {
        return this.http.put("EMR/", emr);
    };
    HomeService.prototype.getHL7Details = function () {
        return this.http.get("HlEngine/getAll");
    };
    HomeService.prototype.updateHL7Details = function (hl7) {
        console.log(hl7);
        return this.http.put("HlEngine/update/" + hl7.name, null);
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/services/mock.auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/mock.auth.service.ts ***!
  \***********************************************/
/*! exports provided: mockauthservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockauthservice", function() { return mockauthservice; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var mockauthservice = (function (_super) {
    __extends(mockauthservice, _super);
    function mockauthservice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.authendicate = { username: "Admin" };
        return _this;
    }
    mockauthservice.prototype.loginDetails = function (username, password) {
        if (username == 'Admin' && password == 'Admin@123') {
            return this.authendicate;
        }
        else {
            return {};
        }
    };
    mockauthservice = __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], mockauthservice);
    return mockauthservice;
}(_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]));



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\LatestCodeFolder\EMRConnectivity\SourceCode\EMRWebApplication\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map