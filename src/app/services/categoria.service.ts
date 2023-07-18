import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import baserUrl from 'src/app/services/helper';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private http: HttpClient) { }

  //listar categorias activadas
  public listarCategoriasActivadas(): Observable<any[]> {
    return this.http.get<any[]>(`${baserUrl}/categoria/activadas`);
  }

  // listar categorias desactivadas
  public listarCategoriasDesactivadas(): Observable<any[]> {
    return this.http.get<any[]>(`${baserUrl}/categoria/desactivadas`);
  }
  //desactivar categoria
  public desactivarCategoria(categoriaId: any): Observable<any> {
    return this.http.post(`${baserUrl}/categoria/desactivar/${categoriaId}`, {});
  }
  //activar categoria
  public activarCategoria(categoriaId: any) {
    return this.http.post(`${baserUrl}/categoria/activar/${categoriaId}`, {})
  }
  //listar por id
  public obtenerCategoriaPorId(categoriaId: any): Observable<any> {
    return this.http.get(`${baserUrl}/categoria/${categoriaId}`);
  }
  //crear categoria
  public agregarCategoria(nombre: string, imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('imagen', imagen);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<any>(baserUrl + '/categoria/', formData, { headers: headers });
  }

  //actualizar categoria
  public actualizarCategoria(categoriaId: number, categoria: any): Observable<any> {
    const formData = new FormData();
    formData.append('nombre', categoria.nombre);
    if (categoria.imagen instanceof File) {
      formData.append('imagen', categoria.imagen, categoria.imagen.name);
    }

    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });

    return this.http.put(`${baserUrl}/categoria/${categoriaId}`, formData, { headers });
  }
  //buscar nombre de categoria

  public buscarCategoriaPorNombre(nombre: string): Observable<any> {
    const url = `http://localhost:8080/categoria/nombre?nombre=${nombre}`;
  
    return this.http.get<any>(url);
  }
  
}
