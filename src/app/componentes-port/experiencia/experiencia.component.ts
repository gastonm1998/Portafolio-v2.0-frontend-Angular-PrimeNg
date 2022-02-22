import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';

import { ApiService } from '../../servicios/api/api.service';
import {ExperienciaI} from '../../modelos/experiencia.interface';

import { Router } from '@angular/router';

import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig
} from "primeng/api";



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],

})
export class ExperienciaComponent implements OnInit {

  experiencia: ExperienciaI[] = [];
  educacion: any[] = [];

  constructor( private api:ApiService,private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,private router:Router) { }

  ngOnInit(): void {

    this.primengConfig.ripple = true;

    this.api.obtenerDataExperiencia().subscribe(data => {
      this.experiencia = data;
    });

    /*this.apiService.obtenerDataExperiencia().subscribe(
      res => console.log(res)

    );*/





    /*this.experiencia = [
      {
        status: "Temcoco", date: '01/2016 - 06/2016', icon: PrimeIcons.ID_CARD, color: '#bbe3ff',descripcion:"Bobinado y mantenimientos de motores electicos industriales, bombas de agua."
      },
      {
        status: "Ledesma",date: '04/2018 - 10/2018', icon: PrimeIcons.ID_CARD, color: '#bbe3ff',descripcion:"Pasante para practicas de electricidad industrial y mantenimiento"
      },
      {
        status: "ElectroTec",date: '06/2017 - 09-2017', icon: PrimeIcons.ID_CARD, color: '#bbe3ff',descripcion:"Ayudante en reparacion de productos electronicos"
      },
      {
        status: "Independiente",date: '01-2016 - 12/2021', icon: PrimeIcons.ID_CARD, color: '#bbe3ff',descripcion:"Armado, reparacion y mantenimiento de PC para gaming y workstation"
      },
    ];*/



    this.educacion = [
      {
        status: "Escuela Tecnica Ingeniero Herminio Arrieta", date: '03/2012 - 11/2018', icon: PrimeIcons.ID_CARD, color: '#bbe3ff',descripcion:"Técnico en instalaciones eléctricas y automáticas"
      },
      {
        status: "Platzi",date: '09/2020 - 09/2021', icon: PrimeIcons.ID_CARD, color: '#bbe3ff',descripcion:"Multiples cursos de formacion para programacion"
      },
      {
        status: "Plan nacional de formación en programación Argentina Programa",date: '06/2021 - Cursando', icon: PrimeIcons.ID_CARD, color: '#bbe3ff',descripcion:"Programa de formacion de desarrolladores web full stack Jr"
      },

    ];
  }


  borrarExperiencia(id:any){
      console.log(id);
      this.api.eliminarExperiencia(id).subscribe();
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('lobby#experiencia');
    }

  confirm(event: Event,id:any) {
    this.confirmationService.confirm({
      target: event.target!,
      message: "¿Estas seguro que desea eliminar?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.messageService.add({
          severity: "info",
          summary: "Experiencia eliminada",
          detail: "Se a eliminado sastifactoriamente"
        });
        this.borrarExperiencia(id);

        this.reloadComponent();

      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Cancelado",
          detail: "Se a cancelado la eliminacion"
        });
      }
    });
  }

}
