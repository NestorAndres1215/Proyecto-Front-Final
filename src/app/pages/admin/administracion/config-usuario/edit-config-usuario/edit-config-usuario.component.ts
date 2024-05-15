import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ConfigUsuarioComponent } from '../config-usuario.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/model/usuario';
import { UserService } from 'src/app/services/user.service';
import { MensajeService } from 'src/app/services/mensaje.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-edit-config-usuario',
  templateUrl: './edit-config-usuario.component.html',
  styleUrls: ['./edit-config-usuario.component.css']
})
export class EditConfigUsuarioComponent implements OnInit {

  public formulario: UntypedFormGroup;
  showPassword = false;
  lista: any
  username: string
  email: string;
  telefono: string;
  nombre: string
  apellido: string
  contra: string
  direccion: string
  rol: string
  datosTabla: any;
  constructor(
    private dialogRe: MatDialogRef<ConfigUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef,
    private mensajeService: MensajeService,
    private dialog: MatDialog,
    private userService: UserService,
    private formBuilder: UntypedFormBuilder,) { }

  ngOnInit(): void {
    this.lista = this.data
    this.listarEdiciones()
  }

  initForm(): void {

    this.formulario = this.formBuilder.group({
      nombre: [this.nombre, Validators.required],
      username: [this.username, Validators.required],
      email: [this.email, [Validators.required]],
      password: [this.contra, Validators.required],
      apellido: [this.apellido, Validators.required],
      telefono: [this.telefono, Validators.required],
      direccion: [this.direccion, Validators.required],
      rol: [this.rol, Validators.required],
    });
  }

  listarEdiciones() {

    this.username = this.lista.row.ul_usuario;
    this.nombre = this.lista.row.ul_nombre;
    this.apellido = this.lista.row.ul_apellido;
    this.email = this.lista.row.ul_correo;
    this.telefono = this.lista.row.ul_telefono;
    this.contra = this.lista.row.ul_contra
    this.direccion = this.lista.row.ul_direccion
    this.rol = this.lista.row.ul_rol
    this.initForm()
this.deshabilitar()
  }

  deshabilitar() {
    this.formulario.get('rol').disable();
  }

  togglePasswordVisibility(input: HTMLInputElement): void {
    this.showPassword = !this.showPassword;
    input.type = this.showPassword ? 'text' : 'password';
  }

  cerrar() {
    this.dialogRe.close();
  }
  operar() {
    console.log(this.lista.row.ul_codigo)
    console.log(this.formulario.value)
    if (this.formulario.valid) {
      const objRegistrar: Usuario = {
        ul_codigo: this.lista.row.ul_codigo,
        username: this.formulario.get('username').value,
        password: this.formulario.get('password').value,
        ul_nombre: this.formulario.get('nombre').value,
        ul_apellido: this.formulario.get('apellido').value,
        ul_correo: this.formulario.get('email').value,
        ul_telefono: this.formulario.get('telefono').value,
        ul_direccion: this.formulario.get('direccion').value,
        ul_estado: true,
        ul_rol: this.formulario.get('rol').value,
      };


      console.log(objRegistrar)

      this.userService.actualizarUsuario(objRegistrar).subscribe(
        (response) => {
          this.mensajeService.MostrarMensaje("Se Registro Usuario")
          this.formulario.reset();

          this.dialog.closeAll();
          this.listarUsuario()
          this.cdr.detectChanges();
          
        },
        (error) => {
          this.mensajeService.MostrarMensaje("No se registro Usuario")
        }
      )
      this.formulario.reset();
      this.cdr.markForCheck();
    }
    else {
      console.log('El formulario no es válido');
      this.formulario.markAllAsTouched();
    }

  }
  usuarios: any;
  dataSource: MatTableDataSource<any>;

  async listarUsuario() {  
    this.userService.obtenerUsuario().subscribe((r) => {
      console.log(r)
      this.usuarios = r;
   //   this.dataSource.data = this.usuarios; // Actualiza el datasource
      this.cdr.detectChanges(); // Forzar detección de cambios;


    });
  }
}
