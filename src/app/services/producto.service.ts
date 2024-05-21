import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import baserUrl from 'src/app/interceptor/helper';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {



  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/producto';



  public actualizarProducto(id: number, producto: any): Observable<any> {
    const formData = new FormData();
    formData.append('nombre', producto.nombre);
    formData.append('descripcion', producto.descripcion);
    formData.append('precio', producto.precio.toString());
    if (producto.imagen instanceof File) {
      formData.append('imagen', producto.imagen, producto.imagen.name);
    }

    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });

    return this.http.put(`${baserUrl}/producto/${id}`, formData, { headers });
  }
  ///agregar producto
  public agregarProducto(
    nombre: string,
    precio: string,
    descripcion: string,
    version: string,
    material: string,
    genero: string,
    equipo: string,
    temporada: string,
    atributo: string,
    imagen1: File,
    imagen2: File,
    categoria: number,
   
  ): Observable<any> {
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('descripcion', descripcion);
    formData.append('version', version);
    formData.append('material', material);
    formData.append('genero', genero);
    formData.append('equipo', equipo);
    formData.append('temporada', temporada);
    formData.append('atributo', atributo);
    formData.append('imagen1', imagen1);
    formData.append('imagen2', imagen2);
    formData.append('categoriaId', categoria.toString());
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post<any>(this.baseUrl + '/', formData, { headers: headers });
  }


  public listarProductoActivadas(): Observable<any[]> {
    return this.http.get<any[]>(`${baserUrl}/producto/activadas`);
  }


  public listarProductoDesactivadas(): Observable<any[]> {
    return this.http.get<any[]>(`${baserUrl}/producto/desactivadas`);
  }

  public obtenerProductoPorId(productoId: any): Observable<any> {
    return this.http.get(`${baserUrl}/producto/${productoId}`);
  }


}
