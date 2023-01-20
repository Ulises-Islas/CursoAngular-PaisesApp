import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-continente',
  templateUrl: './por-continente.component.html',
  styles:[
    `
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorContinenteComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private service: PaisService) {}

  getClass(item: string) {
    return (item === this.regionActiva) ? 'btn-primary': 'btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) return;
    this.regionActiva = region;
    this.paises = [];
    this.service.buscarContinente(this.regionActiva).subscribe(res => {
      this.paises = res;
    })
  }

}
