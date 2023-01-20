import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(arg: string): Observable<Country[]> {
    const buscarUrl: string = `${this.url}/name/${arg}`;
    return this.http.get<Country[]>(buscarUrl);
  }

  buscarCapital(arg: string): Observable<Country[]> {
    const buscarUrl: string = `${this.url}/capital/${arg}`;
    return this.http.get<Country[]>(buscarUrl);
  }
  buscarDetalles(arg: string): Observable<Country> {
    const buscarUrl: string = `${this.url}/alpha/${arg}`;
    return this.http.get<Country>(buscarUrl);
  }
}
