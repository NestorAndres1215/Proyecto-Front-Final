import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from 'src/app/services/helper';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(
    private http: HttpClient
  ) { }
  public listarCompra() {
    return this.http.get(`${baserUrl}/compra/`);
  }

  public obtenerCompraPorId(compraId: any): Observable<any> {
    return this.http.get(`${baserUrl}/compra/${compraId}`);
  }
  public agregarCompra(compra: any) {
    return this.http.post(`${baserUrl}/compra/`, compra);
  }
}
