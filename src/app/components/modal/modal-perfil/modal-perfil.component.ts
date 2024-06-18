import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrls: ['./modal-perfil.component.css']
})
export class ModalPerfilComponent implements OnInit {
  public formulario: UntypedFormGroup;
  datos: any
  user: any 
  constructor(private formBuilder: UntypedFormBuilder,    public login: LoginService,
    private usuarioService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  imagenUrlBase = 'data:image/jpeg;base64,';
  username: string
  email: string;
  telefono: string;
  nombre: string
  apellido: string
  contra: string
  direccion: string
  rol: string
  ngOnInit(): void {
    console.log(this.data)
    const dataArray = Object.values(this.data);
    this.user = this.login.getUser();
    console.log(typeof this.user.username)

   // this.datos = dataArray;
    this.usuarioService.obtenerUsuarioNombre(this.user.username).subscribe((data) => {
      this.datos = data;

    });
  }

  mostrarImagen(perfil: any): string {
    return perfil.ul_perfil ? this.imagenUrlBase + perfil.ul_perfil : '';
  }

  cerrar() { }

}
