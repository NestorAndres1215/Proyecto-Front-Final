import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import baserUrl from '../interceptor/helper';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CompaniaService {

  constructor(private http: HttpClient) { }
  obtenerUsuario(): Observable<any> {
    return this.http.get(`${baserUrl}/compania/listar`);
  }

  actualizarCategoria(com_codigo: string, registrar: any): Observable<any> {
    const formData: FormData = new FormData();
    
    formData.append('nombre', registrar.com_nombre);
    formData.append('telefono', registrar.com_telefono);
    formData.append('direccion', registrar.com_direccion);
    formData.append('correo', registrar.com_correo);
    formData.append('pais', registrar.com_pais);
    formData.append('sector', registrar.com_sector);
    formData.append('descripcion', registrar.com_descripcion);
    formData.append('ruc', registrar.com_ruc);
    formData.append('fecha', registrar.com_fecha_de_fundacion);
  
    if (registrar.com_logo instanceof File) {
      formData.append('archivo', registrar.com_logo, registrar.com_logo.name);
    }
  
    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data' 
    });
  
    return this.http.put(`${baserUrl}/compania/actualizar/${com_codigo}`, formData, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          console.error('Error del lado del cliente:', error.error.message);
        } else {
          console.error(`Error en el servidor: ${error.status}, ${error.error}`);
        }
        throw error;
      })
    );
  }
  
  
}
