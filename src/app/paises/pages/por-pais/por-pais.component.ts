import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private service: PaisService) {}

  buscar(e: string) {
    this.termino = e;
    this.hayError = false;
    if (this.termino.trim().length === 0) return;
    this.service.buscarPais(this.termino).subscribe(res => {
      console.log(res);
      this.paises = res;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(e: string) {
    this.hayError = false;
  }

}
