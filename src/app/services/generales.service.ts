import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, of, tap } from 'rxjs';
import baserUrl from '../interceptor/helper';
import { Detalle } from '../model/general';
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
    return this.http.get(`${baserUrl}/general/listaGeneralesDetalle/${codigo}`);
  }
  registrar(detalle: any): Observable<any> {
    return this.http.post(`${baserUrl}/general/registrardev`, detalle).pipe(
      tap(response => {
        console.log('Registro exitoso:', response);
      }),
      catchError(error => {
        if (error.error instanceof ErrorEvent) {
          // Error del cliente
          console.error('Error del cliente:', error.error.message);
        } else {
          // Error del servidor
          console.error('Error del servidor:', error);
          console.error('Error Status:', error.status || 'No status available');
          console.error('Error Body:', error.error || 'No body available');
        }
        return of(null); // Maneja el error adecuadamente
      })
      
 
    );
  }
  
}
