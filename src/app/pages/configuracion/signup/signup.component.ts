import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public formulario: UntypedFormGroup;


  constructor(
    private userService: UserService,
    private snack: MatSnackBar,
    private usuarioService: UsuarioService,
    private formBuilder: UntypedFormBuilder,
  ) {
    this.formulario = new FormGroup({})
    this.formulario = this.formBuilder.group({
      txtusuario: ['', Validators.required],
    })

      ;
  }

  ngOnInit(): void {
    this.initForm();
    this.lista()
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
  usuarios: any[];
  email: any
  telefono: any
  username: any
  usuario: boolean = false;
  async lista() {

    await this.usuarioService.obtenerUsuario().subscribe(
      data => {
        console.log(data)
        this.username = data.map(usuario => usuario.username);
      }
    );




  }


  operar() {
    console.log(this.username)
    console.log(this.formulario.value)
    if (this.formulario.valid) {
      const objRegistrar: Usuario = {
        username: this.formulario.get('username').value,
        password: this.formulario.get('password').value,
        nombre: this.formulario.get('nombre').value,
        apellido: this.formulario.get('apellido').value,
        email: this.formulario.get('email').value,
        telefono: this.formulario.get('telefono').value,
      };
      console.log(objRegistrar)
      const formData = this.formulario.value;
      this.userService.añadirUsuario(objRegistrar).subscribe(
        (response) => {
          console.log('Datos del formulario:', objRegistrar);
          console.log('Respuesta del servicio:', response);
        },
        (error) => {
          console.log(formData)
          console.error('Error al actualizar datos:', error);
        }
      )
      this.formulario.reset();
    }
    else {
      console.log('El formulario no es válido');
      this.formulario.markAllAsTouched();
    }

  }



}
