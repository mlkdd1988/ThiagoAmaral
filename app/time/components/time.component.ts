import { Component, OnInit } from '@angular/core';
import { Time } from '../class/time';
import { TimeService } from '../service/time.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'time',
    templateUrl: 'app/time/templates/time.template.html',
    providers: [TimeService]
})

export class TimeComponent implements OnInit {
    times: Time[];
    timeObject = new Time();
    edit = false;
    errorMessage: string;
    i: number;
    private sub: any;

    constructor(private timeService: TimeService, private route: ActivatedRoute) { }

    getListTimes(): void {
        this.timeService.getListTime()
            .subscribe(
            times => this.times = times,
            error => this.errorMessage = <any>error);

    };

    deletarTime(id, i): void {
        this.i = i;
        this.timeService.deletarTime(id)
            .subscribe(
            success => this.times.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    salvarTime(time: Time) {
        if (!time.nome) { return; }
        this.timeService.salvarTime(time)
            .subscribe(
            time => this.popularLista(time),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(time: Time) {
        this.times.push(time);
        this.timeObject = new Time();
    }

    editarTime(time: Time, persistir = false): void {
        this.edit = true;
        this.timeObject = time;
        if (persistir) {
            if (!time.nome) { return; }
            this.timeService.salvarTime(time)
                .subscribe(
                time => this.atualizarFormulario(),
                error => this.errorMessage = <any>error
                );
        }
    }

    atualizarFormulario(): void {
        this.timeObject = new Time();
        this.edit = false;
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            console.log(id);
        });
        this.getListTimes();
    };
}

