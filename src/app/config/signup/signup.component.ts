
import { UserService } from '../../services/user.service';
import {  Component, OnInit } from '@angular/core';

import {  FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Usuario, } from 'src/app/model/usuario';
import { MensajeService } from 'src/app/services/mensaje.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public formulario: UntypedFormGroup;
  usuarios: any[];
  email: any
  telefono: any
  username: any
  usuario: boolean = false;
  constructor(
    private userService: UserService,
    private formBuilder: UntypedFormBuilder,
    private mensaje: MensajeService
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

        ul_rol: 'NORMAL',
      };


      console.log(objRegistrar)

      this.userService.añadirUsuario(objRegistrar).subscribe(
        (response) => {
          this.mensaje.MostrarMensaje("Se Registro Usuario")
          this.formulario.reset();
        },
        (error) => {
          console.log(error.error)
          this.mensaje.MostrarError(error.error)
        }
      )

    }
    else {
      console.log('El formulario no es válido');
      this.formulario.markAllAsTouched();
    }

  }



}
