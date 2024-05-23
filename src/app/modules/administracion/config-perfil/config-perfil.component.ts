import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { VisorPerfilComponent } from './visor-perfil/visor-perfil.component';

@Component({
  selector: 'app-config-perfil',
  templateUrl: './config-perfil.component.html',
  styleUrls: ['./config-perfil.component.css']
})
export class ConfigPerfilComponent implements OnInit {
  user: any = null;
  public form: UntypedFormGroup;
  listaRol: any[] = ['ADMIN', 'NORMAL'];
  datosTabla: any;
  rol: any
  imagenUrlBase = 'data:image/jpeg;base64,';
  constructor(
    public login: LoginService,
    private formBuilder: UntypedFormBuilder,
    public service: UserService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.formulario()
    this.listarUsuario("ADMIN")
    this.user = this.login.getUser();
    console.log()
  }

  volver() {
    this.router.navigate(['/admin']);
  }
  TablaRol() {
    this.rol = this.form.get('rol').value;
    this.listarUsuario(this.rol)


  }

  formulario() {

    this.form = this.formBuilder.group({
      rol: ['ADMIN']
    });
  }

  mostrarImagen(perfil: any): string {
    return perfil.ul_perfil ? this.imagenUrlBase + perfil.ul_perfil : '';
  }
  async listarUsuario(event: String) {

    console.log(event)
    this.service.obtenerUsuarioRol(event).subscribe((data) => {
      this.datosTabla = data;

    });
  }

  operar(perfil:any){
    console.log(typeof perfil)
    const dialogRef = this.dialog.open(VisorPerfilComponent, {
      width: '400px',
      height: '480px',
      data: {
          perfil
      }
    });
  }
}
