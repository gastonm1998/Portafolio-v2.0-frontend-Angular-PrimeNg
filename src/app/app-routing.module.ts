/*Modulo para el manejo de las rutas del proyecto */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componenteLogin/login/login.component';
import { EBannerPrincipalComponent } from './componentesEdicion/edicionBannerPrincipal/e-banner-principal/e-banner-principal.component';
import { AComplementosComponent } from './componentesEdicion/edicionCertificadoComplementos/a-complementos/a-complementos.component';
import { EComplementosComponent } from './componentesEdicion/edicionCertificadoComplementos/e-complementos/e-complementos.component';
import { ADataBaseComponent } from './componentesEdicion/edicionCertificadoDataBase/a-data-base/a-data-base.component';
import { EDataBaseComponent } from './componentesEdicion/edicionCertificadoDataBase/e-data-base/e-data-base.component';
import { AHtmlCssComponent } from './componentesEdicion/edicionCertificadoHtmlCss/a-html-css/a-html-css.component';
import { EHtmlCssComponent } from './componentesEdicion/edicionCertificadoHtmlCss/e-html-css/e-html-css.component';
import { AIoTComponent } from './componentesEdicion/edicionCertificadoIoT/a-io-t/a-io-t.component';
import { EIoTComponent } from './componentesEdicion/edicionCertificadoIoT/e-io-t/e-io-t.component';
import { AJavaScriptComponent } from './componentesEdicion/edicionCertificadoJavaScript/a-java-script/a-java-script.component';
import { EJavaScriptComponent } from './componentesEdicion/edicionCertificadoJavaScript/e-java-script/e-java-script.component';
import { APhytonComponent } from './componentesEdicion/edicionCertificadoPyhton/a-phyton/a-phyton.component';
import { EPhytonComponent } from './componentesEdicion/edicionCertificadoPyhton/e-phyton/e-phyton.component';
import { AEducacionComponent } from './componentesEdicion/edicionEducacion/a-educacion/a-educacion.component';
import { EEducacionComponent } from './componentesEdicion/edicionEducacion/e-educacion/e-educacion.component';
import {AExperienciaComponent} from './componentesEdicion/edicionExperiencia/a-experiencia/a-experiencia.component';
import { EExperienciaComponent } from './componentesEdicion/edicionExperiencia/e-experiencia/e-experiencia.component';
import { EInformacionDireccionComponent } from './componentesEdicion/edicionInformacionContacto/e-informacion-direccion/e-informacion-direccion.component';
import { EInformacionEmailComponent } from './componentesEdicion/edicionInformacionContacto/e-informacion-email/e-informacion-email.component';
import { EInformacionLinkedInComponent } from './componentesEdicion/edicionInformacionContacto/e-informacion-linked-in/e-informacion-linked-in.component';
import { EInformacionTelefonoComponent } from './componentesEdicion/edicionInformacionContacto/e-informacion-telefono/e-informacion-telefono.component';
import { ALenguajesComponent } from './componentesEdicion/edicionLenguajes/a-lenguajes/a-lenguajes.component';
import { ELenguajesComponent } from './componentesEdicion/edicionLenguajes/e-lenguajes/e-lenguajes.component';
import { ASoftSkillComponent } from './componentesEdicion/edicionSoftSkills/a-soft-skill/a-soft-skill.component';
import { ESoftSkillComponent } from './componentesEdicion/edicionSoftSkills/e-soft-skill/e-soft-skill.component';
import { CartelInicioComponent } from './home/cartel-inicio/cartel-inicio.component';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [

  {path:'', component:CartelInicioComponent},
  {path: 'experienciaEditar/:id', component: EExperienciaComponent},
  { path: 'experienciaAgregar', component: AExperienciaComponent},
  {path:'lobby', component:LobbyComponent},
  {path:'editarExperiencia', component:EExperienciaComponent},
  {path:"editarBannerPrincipal",component:EBannerPrincipalComponent},
  {path:"agregarLenguaje",component:ALenguajesComponent},
  {path:"lobby/editarLenguaje/:id",component:ELenguajesComponent},
  {path:"agregarSoftSkill",component:ASoftSkillComponent},
  {path:"lobby/editarSoftSkill/:id",component:ESoftSkillComponent},
  {path:"agregarEducacion",component:AEducacionComponent},
  {path:"lobby/editarEducacion/:id",component:EEducacionComponent},
  {path:"agregarcertJavaScript",component:AJavaScriptComponent},
  {path:"lobby/editarCertJavaScript/:id",component:EJavaScriptComponent},
  {path:"agregarcertPython",component:APhytonComponent},
  {path:"lobby/editarCertPython/:id",component:EPhytonComponent},
  {path:"agregarcertHtmlCss",component:AHtmlCssComponent},
  {path:"lobby/editarCertHtmlCss/:id",component:EHtmlCssComponent},
  {path:"agregarCertIoT",component:AIoTComponent},
  {path:"lobby/editarCertIoT/:id",component:EIoTComponent},
  {path:"agregarCertDataBase",component:ADataBaseComponent},
  {path:"lobby/editarCertDataBase/:id",component:EDataBaseComponent},
  {path:"agregarCertComplementos",component:AComplementosComponent},
  {path:"lobby/editarCertComplementos/:id",component:EComplementosComponent},
  {path:"lobby/editarInformacionDireccion/:id",component:EInformacionDireccionComponent},
  {path:"lobby/editarInformacionEmail/:id",component:EInformacionEmailComponent},
  {path:"lobby/editarInformacionLinkedin/:id",component:EInformacionLinkedInComponent},
  {path:"lobby/editarInformacionTelefono/:id",component:EInformacionTelefonoComponent},
  {path:"login",component:LoginComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
