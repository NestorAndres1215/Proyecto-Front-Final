import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import baserUrl from 'src/app/services/helper';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) { }

  //listar usuario admin
  public obtenerAdminUsuarioRoles(): Observable<any> {
    return this.http.get(`${baserUrl}/usuariorol/admin/`);
  }

  public obtenerUsuario(): Observable<any> {
    return this.http.get(`${baserUrl}/usuarios/`);
  }
  //registrar usuarios admin
  public añadirUsuario(user:any){
    return this.http.post(`${baserUrl}/usuarios/admin/`,user);
  }
}
