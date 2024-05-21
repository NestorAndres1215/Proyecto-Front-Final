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
  actualizarCategoria(com_codigo: String, registrar: any): Observable<any> {

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
      formData.append('imagen', registrar.com_logo, registrar.com_logo.name);
    }

    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });

    return this.http.put(`${baserUrl}/compania/${com_codigo}`, formData, { headers });
  }
}
