import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {


  constructor(private http: HttpClient) { }

  //listar promocion activadas
  public listarPromocionActivadas(): Observable<any[]> {
    return this.http.get<any[]>(`${baserUrl}/promocion/activadas`);
  }

  // listar promocion desactivadas
  public listarPromocionDesactivadas(): Observable<any[]> {
    return this.http.get<any[]>(`${baserUrl}/promocion/desactivadas`);
  }
  //listar por id
  public obtenerPromocionPorId(promocionId: any): Observable<any> {
    return this.http.get(`${baserUrl}/promocion/${promocionId}`);
  }
}
