import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from '../interceptor/helper';
import { Usuario } from '../model/usuario';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  añadirUsuario(user: Usuario) {
    return this.http.post(`${baserUrl}/usuarios/`, user);
  }

  obtenerUsuario(): Observable<any> {
    return this.http.get(`${baserUrl}/usuarios/listaUsuario/`);
  }

  obtenerUsuarioCodigo(codigo: String): Observable<any> {
    return this.http.get(`${baserUrl}/usuarios/listaUsuario/${codigo}`);
  }

  obtenerUsuarioRol(rol: String): Observable<any> {
    return this.http.get(`${baserUrl}/usuarios/listaUsuario/rol/${rol}`);
  }

  obtenerUsuarioNombre(usuario: String): Observable<any> {
    return this.http.get(`${baserUrl}/usuarios/listaUsuario/usuario/${usuario}`);
  }

  actualizarUsuario(user: Usuario): Observable<any> {
    console.log(user);
    return this.http.put(`${baserUrl}/usuarios/actualizarUsuario/`, user, { responseType: 'text' })
      .pipe(
        map(response => {
          try {
            return JSON.parse(response);
          } catch (error) {
            console.error('Error parsing response', error);
            return response;
          }
        }),
        catchError(error => {
          console.error('HTTP error', error);
          return throwError(error);
        })
      );
  }
  

  eliminarUsuario(codigo: String) {
    return this.http.delete(`${baserUrl}/usuarios/eliminarUsuario/${codigo}`);
  }
}
