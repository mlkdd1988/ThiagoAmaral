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
var jogador_1 = require('../class/jogador');
var jogador_service_1 = require('../service/jogador.service');
var router_1 = require('@angular/router');
var JogadorComponent = (function () {
    function JogadorComponent(jogadorService, route) {
        this.jogadorService = jogadorService;
        this.route = route;
        this.jogadorObject = new jogador_1.Jogador();
        this.edit = false;
    }
    JogadorComponent.prototype.getListJogadores = function () {
        var _this = this;
        this.jogadorService.getListJogador()
            .subscribe(function (jogadores) { return _this.jogadores = jogadores; }, function (error) { return _this.errorMessage = error; });
    };
    ;
    JogadorComponent.prototype.deletarJogador = function (id, i) {
        var _this = this;
        this.i = i;
        this.jogadorService.deletarJogador(id)
            .subscribe(function (success) { return _this.jogadores.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    JogadorComponent.prototype.salvarJogador = function (jogador) {
        var _this = this;
        if (!jogador.nome) {
            return;
        }
        this.jogadorService.salvarJogador(jogador)
            .subscribe(function (jogador) { return _this.popularLista(jogador); }, function (error) { return _this.errorMessage = error; });
    };
    JogadorComponent.prototype.popularLista = function (jogador) {
        this.jogadores.push(jogador);
        this.jogadorObject = new jogador_1.Jogador();
    };
    JogadorComponent.prototype.editarJogador = function (jogador, persistir) {
        var _this = this;
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.jogadorObject = jogador;
        if (persistir) {
            if (!jogador.nome) {
                return;
            }
            this.jogadorService.salvarJogador(jogador)
                .subscribe(function (jogador) { return _this.atualizarFormulario(); }, function (error) { return _this.errorMessage = error; });
        }
    };
    JogadorComponent.prototype.atualizarFormulario = function () {
        this.jogadorObject = new jogador_1.Jogador();
        this.edit = false;
    };
    JogadorComponent.prototype.ngOnInit = function () {
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            console.log(id);
        });
        this.getListJogadores();
    };
    ;
    JogadorComponent = __decorate([
        core_1.Component({
            selector: 'jogador',
            templateUrl: 'app/jogador/templates/jogador.template.html',
            providers: [jogador_service_1.JogadorService]
        }), 
        __metadata('design:paramtypes', [jogador_service_1.JogadorService, router_1.ActivatedRoute])
    ], JogadorComponent);
    return JogadorComponent;
}());
exports.JogadorComponent = JogadorComponent;
//# sourceMappingURL=jogador.component.js.map