import { Injectable } from '@angular/core';

@Injectable()
export class PlanesService {
  private planes: any[] = [
    {
      nombre: 'PLAN HOME ',
     // imagen: '/assets/img/precio1.png',
     megas: '40 MEGAS',
     valor: ' 20 $',
      tipo: 'INTERNET BANDA ANCHA ILIMITADO',
      contrato: 'SIN CONTRATO A PLAZO FIJO',
      documentacion: 'SOLO PRESENTANDO TU COPIA DE CÉDULA',
    },
    {
      nombre: 'PLAN HOME ',
      // imagen: '/assets/img/precio1.png',
      megas: '50 MEGAS',
      valor: '25 $',
      tipo: 'INTERNET BANDA ANCHA ILIMITADO',
      contrato: 'SIN CONTRATO A PLAZO FIJO',
      documentacion: 'SOLO PRESENTANDO TU COPIA DE CÉDULA',
    },
    {
      nombre: 'PLAN HOME ',
      // imagen: '/assets/img/precio1.png',
      megas: '80 MEGAS',
      valor: '30 $',
      tipo: 'INTERNET BANDA ANCHA ILIMITADO',
      contrato: 'SIN CONTRATO A PLAZO FIJO',
      documentacion: 'SOLO PRESENTANDO TU COPIA DE CÉDULA',
    },
    {
      nombre: 'PLAN HOME ',
      // imagen: '/assets/img/precio1.png',
      megas: '150 MEGAS',
      valor: '35 $',
      tipo: 'INTERNET BANDA ANCHA ILIMITADO',
      contrato: 'SIN CONTRATO A PLAZO FIJO',
      documentacion: 'SOLO PRESENTANDO TU COPIA DE CÉDULA',
    },
  ];
  constructor() {
    console.log('servicio listo para usar');
  }
  getPlanes(): Plan[] {
    return this.planes;
  }
}
export interface Plan {
  nombre: string;
  megas: string;
  valor: string;
  tipo: string;
  contrato: string;
  documentacion: string;
}
