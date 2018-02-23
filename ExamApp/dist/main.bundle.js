webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/answer/answer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\"> Home</a> \n<a [routerLink]=\"['/question',id]\"> Go back to Question page</a> \n<h1>{{tempObj.question}}</h1>\n\n<form (submit)=\"answersubmit()\">\n\tYour Answer<input type=\"text\" name=\"hh\" [(ngModel)]=\"AnswerTempObj.answer\">\n\tSupporting Details<input type=\"text\" name=\"hha\" [(ngModel)]=\"AnswerTempObj.detail\">\n\t<button>Cancel</button>\n\t<input type=\"submit\" name=\"hhj\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "./src/app/answer/answer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.tempId = "";
        this.tempObj = {};
        this.AnswerTempObj = { answer: "", detail: "" };
    }
    AnswerComponent.prototype.ngOnInit = function () {
        this.passID();
        this.getSpecificQuestion();
    };
    AnswerComponent.prototype.passID = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log("show one id is: ", params['id']);
            _this.tempId = params['id'];
        });
    };
    AnswerComponent.prototype.getSpecificQuestion = function () {
        var _this = this;
        console.log("may i be getSpecificquestion?");
        //console.log("what is id now?",this.passID);
        var observable = this._httpService.getSpecificquestionInService(this.tempId);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("the responsedata in getSpecificQuestion is : ", responseData);
            _this.tempObj = responseData;
            console.log("what is tempObj is : ", _this.tempObj);
            //this.tempArray.push(responseData);
            //console.log(this.tempArray);
            //this._router.navigate(['/']);
        });
    };
    AnswerComponent.prototype.answersubmit = function () {
        var _this = this;
        console.log("may i be answer submit?");
        console.log("what is answertempObj", this.AnswerTempObj);
        var observable = this._httpService.addAnswer(this.AnswerTempObj);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("the responsedata in Answersubmit is : ", responseData);
            _this._router.navigate(['/question', _this.tempId]);
        });
    };
    AnswerComponent = __decorate([
        core_1.Component({
            selector: 'app-answer',
            template: __webpack_require__("./src/app/answer/answer.component.html"),
            styles: [__webpack_require__("./src/app/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], AnswerComponent);
    return AnswerComponent;
}());
exports.AnswerComponent = AnswerComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var secondpage_component_1 = __webpack_require__("./src/app/secondpage/secondpage.component.ts");
var newquestion_component_1 = __webpack_require__("./src/app/newquestion/newquestion.component.ts");
var showquestions_component_1 = __webpack_require__("./src/app/showquestions/showquestions.component.ts");
var answer_component_1 = __webpack_require__("./src/app/answer/answer.component.ts");
var routes = [
    { path: '', component: secondpage_component_1.SecondpageComponent },
    { path: 'index', component: home_component_1.HomeComponent },
    { path: 'new_question', component: newquestion_component_1.NewquestionComponent },
    { path: 'question/:id', component: showquestions_component_1.ShowquestionsComponent },
    { path: 'question/:id/new_answer', component: answer_component_1.AnswerComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Exam One</h1>\n\n<a (logout)=\"logout()\" [routerLink]=\"['/index']\"> Log Out</a> \n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.logout = function () {
        var observable = this._httpService.logoutService();
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("successfully log out ");
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var secondpage_component_1 = __webpack_require__("./src/app/secondpage/secondpage.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var newquestion_component_1 = __webpack_require__("./src/app/newquestion/newquestion.component.ts");
var showquestions_component_1 = __webpack_require__("./src/app/showquestions/showquestions.component.ts");
var answer_component_1 = __webpack_require__("./src/app/answer/answer.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                secondpage_component_1.SecondpageComponent,
                newquestion_component_1.NewquestionComponent,
                showquestions_component_1.ShowquestionsComponent,
                answer_component_1.AnswerComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Q&A</h1>\n\n<form (submit)=\"loginsubmit()\">Name<input type=\"text\" name=\"aa\" [(ngModel)]=\"tempObj.name\"><input type=\"submit\" name=\"ssb\" value=\"Enter\"></form>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.tempObj = { name: "" };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.loginsubmit = function () {
        var _this = this;
        console.log("may i be loginsubmit?");
        var observable = this._httpService.loginService(this.tempObj);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("the responsedata in loginsubmit is : ", responseData);
            _this._router.navigate(['/']);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.loginService = function (loginObj) {
        console.log("may i be service");
        return this._http.post('/api/login/', loginObj);
    };
    HttpService.prototype.addQuestion = function (quesObj) {
        console.log("may i be addQuestion in service?");
        return this._http.post('/api/addQues/', quesObj);
    };
    HttpService.prototype.getquestionInService = function () {
        return this._http.get('/api/getQuestions/');
    };
    HttpService.prototype.showQuestion = function (id) {
        console.log("may i be showquestion in service?", id);
        return this._http.get('/api/ShowOneQues/' + id);
    };
    // answerThatQuestion(id){
    // 	console.log("may i be answerThatquestion in service?",id);
    // 	return this._http.get('/api/AnswerQues/'+id);
    // }
    HttpService.prototype.getSpecificquestionInService = function (id) {
        console.log("may i be get specific ques in service?", id);
        return this._http.get('/api/ShowSpecificQues/' + id);
    };
    HttpService.prototype.addAnswer = function (ansObj) {
        console.log("may i be addAnswer in service?");
        return this._http.post('/api/addAnswer/', ansObj);
    };
    HttpService.prototype.getAllAnswers = function () {
        return this._http.get('/api/getallAnswers/');
    };
    HttpService.prototype.logoutService = function () {
        return this._http.get('/api/logout/');
    };
    HttpService.prototype.addOneLikeinService = function (ansObj) {
        return this._http.put('api/addlike/' + ansObj._id, ansObj);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/newquestion/newquestion.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/newquestion/newquestion.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\"> Home</a> \n<h1>New Question</h1>\n\n<form (submit)=\"questionsubmit()\">\n\tQuestion<input type=\"text\" name=\"aab\" width=\"200\" [(ngModel)]=\"tempQuestion.question\">\n\tDescription(Option)<input type=\"text\" name=\"aac\" width=\"200\" [(ngModel)]=\"tempQuestion.description\">\n\t<button>Cancel</button>\n\t<input type=\"submit\" name=\"bbb\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "./src/app/newquestion/newquestion.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var NewquestionComponent = /** @class */ (function () {
    function NewquestionComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.tempQuestion = { question: "", description: "" };
    }
    NewquestionComponent.prototype.ngOnInit = function () {
    };
    NewquestionComponent.prototype.questionsubmit = function () {
        var _this = this;
        console.log("may i be question submit?");
        var observable = this._httpService.addQuestion(this.tempQuestion);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("the responsedata in questionsubmit is : ", responseData);
            _this._router.navigate(['/']);
        });
    };
    NewquestionComponent = __decorate([
        core_1.Component({
            selector: 'app-newquestion',
            template: __webpack_require__("./src/app/newquestion/newquestion.component.html"),
            styles: [__webpack_require__("./src/app/newquestion/newquestion.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], NewquestionComponent);
    return NewquestionComponent;
}());
exports.NewquestionComponent = NewquestionComponent;


/***/ }),

/***/ "./src/app/secondpage/secondpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/secondpage/secondpage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  secondpage works!\n</p>\n<a [routerLink]=\"['/new_question']\"> Add a question</a>  \n<h5>Question--Answers--Action</h5>\n<h5>Search Bar</h5>\n <form (submit)=\"searchsubmit()\"><input type=\"text\" name=\"ssa\" [(ngModel)]=\"authorInSearchBar\"><input type=\"submit\" name=\"ddh\" value=\"Search\"></form>\n<div *ngFor=\"let ques of tempArray[0]\">{{ques.question}}--{{ques.NumOfAnswer}}--<form (submit)=\"showsubmit(ques._id)\"><input type=\"submit\" name=\"Show\" value=\"Show\"></form><form (submit)=\"answersubmit(ques._id)\"><input type=\"submit\" name=\"Answer\" value=\"Answer\"></form></div>       "

/***/ }),

/***/ "./src/app/secondpage/secondpage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var SecondpageComponent = /** @class */ (function () {
    function SecondpageComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.tempArray = [];
        this.passId = "";
        this.authorInSearchBar = "";
        //
        this.tempAuthors = [];
        this.tempObj = {};
    }
    SecondpageComponent.prototype.ngOnInit = function () {
        this.getAllQuestion();
    };
    SecondpageComponent.prototype.searchsubmit = function () {
        console.log("may i be searchsubmit?");
        //this.tempAuthors = [];
        for (var i = 0; i < this.tempArray[0].length; i++) {
            if (this.tempArray[0][i].question = this.authorInSearchBar) {
                this.tempObj = this.tempArray[0][i];
                this.tempArray[0] = [];
                this.tempArray[0].push(this.tempObj);
            }
        }
    };
    //
    SecondpageComponent.prototype.getAllQuestion = function () {
        var _this = this;
        console.log("may i be getallquestion?");
        var observable = this._httpService.getquestionInService();
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("the responsedata in getallQuestion is : ", responseData);
            _this.tempArray.push(responseData);
            console.log(_this.tempArray);
            //this._router.navigate(['/']);
        });
    };
    SecondpageComponent.prototype.showsubmit = function (id) {
        var _this = this;
        console.log("may i be show submit?");
        var observable = this._httpService.showQuestion(id);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("the responsedata in questionsubmit is : ", responseData);
            _this._router.navigate(['/question', id]);
        });
    };
    SecondpageComponent.prototype.answersubmit = function (id) {
        console.log("may i be answer submit?");
        //console.log("the responsedata in answersubmit is : ",responseData);
        this._router.navigate(['/question', id, 'new_answer']);
    };
    SecondpageComponent = __decorate([
        core_1.Component({
            selector: 'app-secondpage',
            template: __webpack_require__("./src/app/secondpage/secondpage.component.html"),
            styles: [__webpack_require__("./src/app/secondpage/secondpage.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], SecondpageComponent);
    return SecondpageComponent;
}());
exports.SecondpageComponent = SecondpageComponent;


/***/ }),

/***/ "./src/app/showquestions/showquestions.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showquestions/showquestions.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\"> Home</a> \n<a [routerLink]=\"['/question',id,'new_answer']\"> Answer this question</a> \n\n<h3>{{tempObj.question}}</h3>\n<h5>{{tempObj.description}}</h5>\n\n\n<h1>Answers: </h1>\n<div *ngFor=\"let ans of tempArray[0]\"><p>Answer`s Name: {{ans.name}}</p><p>{{ans.answers}}</p><p>{{ans.likes}} likes: <button (click)=\"addonelike(ans)\" value=\"Like\"></button></p></div>\n\n\n"

/***/ }),

/***/ "./src/app/showquestions/showquestions.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ShowquestionsComponent = /** @class */ (function () {
    function ShowquestionsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.tempId = "";
        this.tempObj = {};
        this.tempArray = [];
    }
    ShowquestionsComponent.prototype.ngOnInit = function () {
        this.passID();
        this.getSpecificQuestion();
        this.getallAnswers();
    };
    ShowquestionsComponent.prototype.getSpecificQuestion = function () {
        var _this = this;
        console.log("may i be getSpecificquestion?");
        //console.log("what is id now?",this.passID);
        var observable = this._httpService.getSpecificquestionInService(this.tempId);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("the responsedata in getSpecificQuestion is : ", responseData);
            _this.tempObj = responseData;
            console.log("what is tempObj is : ", _this.tempObj);
            //this.tempArray.push(responseData);
            //console.log(this.tempArray);
            //this._router.navigate(['/']);
        });
    };
    ShowquestionsComponent.prototype.passID = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log("show one id is: ", params['id']);
            _this.tempId = params['id'];
        });
    };
    ShowquestionsComponent.prototype.getallAnswers = function () {
        var _this = this;
        console.log("may i be getallAnswers?");
        var observable = this._httpService.getAllAnswers();
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("the responsedata in getall Answers is : ", responseData);
            _this.tempArray.push(responseData);
            console.log(_this.tempArray);
            //this._router.navigate(['/']);
        });
    };
    ShowquestionsComponent.prototype.addonelike = function (ansObj) {
        var _this = this;
        var observable = this._httpService.addOneLikeinService(ansObj);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            _this.tempArray.push(responseData);
            console.log("the responsedata in addoneLike is : ", responseData);
            _this._router.navigate(['/question', ansObj._id]);
        });
    };
    ShowquestionsComponent = __decorate([
        core_1.Component({
            selector: 'app-showquestions',
            template: __webpack_require__("./src/app/showquestions/showquestions.component.html"),
            styles: [__webpack_require__("./src/app/showquestions/showquestions.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ShowquestionsComponent);
    return ShowquestionsComponent;
}());
exports.ShowquestionsComponent = ShowquestionsComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map