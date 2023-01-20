import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private service: PaisService) {}

  buscar(e: string) {
    this.mostrarSugerencias = false;
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
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = e;
    this.service.buscarPais(e).subscribe(paises => this.paisesSugeridos = paises.splice(0, 5), (err => this.paisesSugeridos = []));
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }

}
