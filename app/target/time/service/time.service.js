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
var http_1 = require('@angular/http');
//adicione essa linha
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var TimeService = (function () {
    //adicione o construtor da classe
    function TimeService(http) {
        this.http = http;
        //adicione essa linha
        this.timeUrl = 'https://thiagoamaral.herokuapp.com/time';
    }
    TimeService.prototype.getListTime = function () {
        return this.http.get(this.timeUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //método para salvar o time
    TimeService.prototype.salvarTime = function (time) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        if (!time._id) {
            return this.http.post(this.timeUrl, time, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
        else {
            return this.http.put(this.timeUrl + "/" + time._id, time, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
    };
    TimeService.prototype.deletarTime = function (id) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.delete(this.timeUrl + "/" + id, options);
    };
    //Crie esse método
    TimeService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    TimeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TimeService);
    return TimeService;
}());
exports.TimeService = TimeService;
//# sourceMappingURL=time.service.js.map