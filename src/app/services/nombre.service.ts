import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class NombreService {

  constructor(private http: HttpClient) { }

  public listarNombre(){
    return this.http.get(`${baserUrl}/nombre-empresa/`);
  }

  public agregarNombre(nombre:any){
    return this.http.post(`${baserUrl}/nombre-empresa/`,nombre);
  }
  public actualizarNombre(nombre:any){
    return this.http.put(`${baserUrl}/nombre-empresa/`,nombre);
  }
  public obtenerNombre(nombreempresaId:any){
    return this.http.get(`${baserUrl}/nombre-empresa/${nombreempresaId}`);
  }
  public getNombre(){
    let nombreStr = localStorage.getItem('nombre');
    if(nombreStr != null){
      return JSON.parse(nombreStr);
    }else{
    
      return null;
    }
  }


}
