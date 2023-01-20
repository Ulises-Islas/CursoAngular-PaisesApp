import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  get params() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  buscarPais(arg: string): Observable<Country[]> {
    const buscarUrl: string = `${this.url}/name/${arg}`;
    return this.http.get<Country[]>(buscarUrl, { params: this.params });
  }

  buscarCapital(arg: string): Observable<Country[]> {
    const buscarUrl: string = `${this.url}/capital/${arg}`;
    return this.http.get<Country[]>(buscarUrl, { params: this.params });
  }
  
  buscarDetalles(arg: string): Observable<Country> {
    const buscarUrl: string = `${this.url}/alpha/${arg}`;
    return this.http.get<Country>(buscarUrl);
  }

  buscarContinente(arg: string): Observable<Country[]> {
    const buscarUrl: string = `${this.url}/region/${arg}`;
    return this.http.get<Country[]>(buscarUrl, { params: this.params });
  }
}
