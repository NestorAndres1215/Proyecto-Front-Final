import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from 'src/app/model/usuario';
import { MensajeService } from 'src/app/services/mensaje.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reg-config-usuario',
  templateUrl: './reg-config-usuario.component.html',
  styleUrls: ['./reg-config-usuario.component.css']
})
export class RegConfigUsuarioComponent implements OnInit {
cerrar() {
throw new Error('Method not implemented.');
}
  public formulario: UntypedFormGroup;
  usuarios: any[];
  email: any
  telefono: any
  username: any
  usuario: boolean = false;
  constructor(
    private userService: UserService,
    private formBuilder: UntypedFormBuilder,
    private cdr: ChangeDetectorRef,
    private mensaje: MensajeService,
    private dialog: MatDialog,
  ) {
    this.formulario = new FormGroup({})
    this.formulario = this.formBuilder.group({
      txtusuario: ['', Validators.required],
    })

      ;
  }

  ngOnInit(): void {
    this.initForm();

  }
  initForm(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }


  operar() {

    console.log(this.formulario.value)
    if (this.formulario.valid) {
      const objRegistrar: Usuario = {
        ul_codigo: '',
        username: this.formulario.get('username').value,
        password: this.formulario.get('password').value,
        ul_nombre: this.formulario.get('nombre').value,
        ul_apellido: this.formulario.get('apellido').value,
        correo: this.formulario.get('email').value,
        telefono: this.formulario.get('telefono').value,
        ul_direccion: this.formulario.get('telefono').value,
        ul_estado: true,

        ul_rol: 'ADMIN',
      };


      console.log(objRegistrar)

      this.userService.añadirUsuario(objRegistrar).subscribe(
        (response) => {
          this.mensaje.MostrarMensaje("Se Registro Usuario")
          this.formulario.reset();
          this.formulario.reset();

          this.dialog.closeAll();
   
          this.cdr.detectChanges();
        },
        (error) => {
          console.log(error)
          this.mensaje.MostrarBodyError(error)
        }
      )

    }
    else {
      console.log('El formulario no es válido');
      this.formulario.markAllAsTouched();
    }

  }




}
