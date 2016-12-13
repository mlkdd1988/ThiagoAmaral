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
var time_1 = require('../class/time');
var time_service_1 = require('../service/time.service');
var router_1 = require('@angular/router');
var TimeComponent = (function () {
    function TimeComponent(timeService, route) {
        this.timeService = timeService;
        this.route = route;
        this.timeObject = new time_1.Time();
        this.edit = false;
    }
    TimeComponent.prototype.getListTimes = function () {
        var _this = this;
        this.timeService.getListTime()
            .subscribe(function (times) { return _this.times = times; }, function (error) { return _this.errorMessage = error; });
    };
    ;
    TimeComponent.prototype.deletarTime = function (id, i) {
        var _this = this;
        this.i = i;
        this.timeService.deletarTime(id)
            .subscribe(function (success) { return _this.times.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    TimeComponent.prototype.salvarTime = function (time) {
        var _this = this;
        if (!time.nome) {
            return;
        }
        this.timeService.salvarTime(time)
            .subscribe(function (time) { return _this.popularLista(time); }, function (error) { return _this.errorMessage = error; });
    };
    TimeComponent.prototype.popularLista = function (time) {
        this.times.push(time);
        this.timeObject = new time_1.Time();
    };
    TimeComponent.prototype.editarTime = function (time, persistir) {
        var _this = this;
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.timeObject = time;
        if (persistir) {
            if (!time.nome) {
                return;
            }
            this.timeService.salvarTime(time)
                .subscribe(function (time) { return _this.atualizarFormulario(); }, function (error) { return _this.errorMessage = error; });
        }
    };
    TimeComponent.prototype.atualizarFormulario = function () {
        this.timeObject = new time_1.Time();
        this.edit = false;
    };
    TimeComponent.prototype.ngOnInit = function () {
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            console.log(id);
        });
        this.getListTimes();
    };
    ;
    TimeComponent = __decorate([
        core_1.Component({
            selector: 'time',
            templateUrl: 'app/time/templates/time.template.html',
            providers: [time_service_1.TimeService]
        }), 
        __metadata('design:paramtypes', [time_service_1.TimeService, router_1.ActivatedRoute])
    ], TimeComponent);
    return TimeComponent;
}());
exports.TimeComponent = TimeComponent;
//# sourceMappingURL=time.component.js.map