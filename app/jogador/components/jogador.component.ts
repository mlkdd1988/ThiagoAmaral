import { Component, OnInit } from '@angular/core';
import { Jogador } from '../class/jogador';
import { JogadorService } from '../service/jogador.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'jogador',
    templateUrl: 'app/jogador/templates/jogador.template.html',
    providers: [JogadorService]
})

export class JogadorComponent implements OnInit {
    jogadores: Jogador[];
    jogadorObject = new Jogador();
    edit = false;
    errorMessage: string;
    i: number;
    private sub: any;
    
    constructor(private jogadorService: JogadorService,  private route: ActivatedRoute) { }
    
    getListJogadores(): void {
        this.jogadorService.getListJogador()
            .subscribe(
            jogadores => this.jogadores = jogadores,
            error => this.errorMessage = <any>error);
            
    };
        
    deletarJogador(id, i): void {
        this.i = i;
        this.jogadorService.deletarJogador(id)
            .subscribe(
            success => this.jogadores.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

  salvarJogador(jogador: Jogador) {
        if (!jogador.nome) { return; }
        this.jogadorService.salvarJogador(jogador)
            .subscribe(
            jogador => this.popularLista(jogador),
            error => this.errorMessage = <any>error
            );
    }
    
    popularLista(jogador: Jogador) {
        this.jogadores.push(jogador);
        this.jogadorObject = new Jogador();
    }

    editarJogador(jogador : Jogador, persistir = false): void {
        this.edit = true;
        this.jogadorObject = jogador;
        if (persistir) {
            if (!jogador.nome) { return; }
            this.jogadorService.salvarJogador(jogador)
                .subscribe(
                jogador => this.atualizarFormulario(),
                error => this.errorMessage = <any>error
                );
        }
    }
    
    atualizarFormulario(): void {
        this.jogadorObject = new Jogador();
        this.edit = false;
    }

    ngOnInit(): void {
       this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            console.log(id);
        });
       this.getListJogadores();
    };
}

