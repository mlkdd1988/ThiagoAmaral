import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Services
import { UsuarioService } from '../../usuario/service/usuario.service'
import { JogadorService } from '../../jogador/service/jogador.service'
import { TimeService } from '../../time/service/time.service'
import { PerfilService } from '../../perfil/service/perfil.service'

//Adicionar essa linha
import { AppComponent } from '../app.component';
import { UsuarioComponent } from '../../usuario/components/usuario.component';
import { JogadorComponent } from '../../jogador/components/jogador.component';
import { TimeComponent } from '../../time/components/time.component';
import { HomeComponent } from '../../home/components/home.component';
import { PerfilComponent } from '../../perfil/components/perfil.component';
import { PerfilComponentForm } from '../../perfil/components/perfil.component.form';

import { routing } from '../routes/routes';

import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        HttpModule,
        routing 
    ],
    //Adicionar essa linha
    declarations: [
        AppComponent, 
        UsuarioComponent,
        JogadorComponent,
        TimeComponent, 
        HomeComponent,
        PerfilComponent,
        PerfilComponentForm
     ],
     providers:[
         UsuarioService, 
         JogadorService, 
         TimeService, 
         PerfilService
     ],
    //Adicionar essa linha
    bootstrap: [AppComponent]
})
export class AppModule { }