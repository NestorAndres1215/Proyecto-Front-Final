import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SeleccionesService {

  constructor(private http: HttpClient) { }


  // listar argentina
  public obtenerArgentina(): Observable<any> {
    return this.http.get(`${baserUrl}/producto/argentina/`);
  }
  //////////////////////////////////////////////////////////
 /////////////////////Norteamerica/////////////////////////
//////////////////////////////////////////////////////////
  // listar guatemala
  public obtenerGuatemala(): Observable<any> {
    return this.http.get(`${baserUrl}/producto/guatemala/`);
  }
  // listar jamaica
  public obtenerJamaica(): Observable<any> {
    return this.http.get(`${baserUrl}/producto/jamaica/`);
  }
  // listar honduras
  public obtenerHonduras(): Observable<any> {
    return this.http.get(`${baserUrl}/producto/honduras/`);
  }
  // listar costa rica
  public obtenerCostaRica(): Observable<any> {
    return this.http.get(`${baserUrl}/producto/costa-rica/`);
  }
    // listar panama
    public obtenerPanama(): Observable<any> {
      return this.http.get(`${baserUrl}/producto/panama/`);
    }


}
