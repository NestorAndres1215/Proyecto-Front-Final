import { Injectable } from '@angular/core';
import baserUrl from '../interceptor/helper';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TipoCambioService {

  constructor(private http: HttpClient) { }

  tipoCambio(año:String,mes:String){
    return this.http.get(`${baserUrl}/sunat/moneda/${año}/${mes}`);
  }
}
