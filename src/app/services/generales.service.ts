import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from '../interceptor/helper';
@Injectable({
  providedIn: 'root'
})
export class GeneralesService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerGeneral(): Observable<any> {
    return this.http.get(`${baserUrl}/general/listaGenerales/`);
  }

  obtenerGeneralDetalle(codigo: String): Observable<any> {
    return this.http.get(`${baserUrl}/general/listaGenerales/${codigo}`);
  }
}
