import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public formulario: UntypedFormGroup;
  
  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  }




  constructor(
    private userService: UserService,
    private snack: MatSnackBar,
    private usuarioService: UsuarioService,
    private formBuilder: UntypedFormBuilder,
  ) { this.formulario = new FormGroup({})
  this.formulario = this.formBuilder.group({
    txtusuario: ['', Validators.required],
  })
  
  ;}

  ngOnInit(): void {
    this.initForm(); 
    this.lista()
    if (this.formulario.get('txtusuario')?.value !== null && this.formulario.get('txtusuario')?.value === '') {
      // Realiza alguna acción si el valor no es null y es igual a ''
    }
  }  
  initForm() {
    this.formulario = this.formBuilder.group({
      txtusuario: ['', Validators.required],
    })
  }

  email: any
  telefono: any
  username: any
  usuario: boolean = false; 
  async lista() {
    this.usuarioService.obtenerUsuario().subscribe(
      data => {
        console.log(data);
        this.email = data.map((i: { email: any; }) => i.email)
        this.telefono = data.map((i: { telefono: any; }) => i.telefono)
        this.username = data.map((i: { username: any; }) => i.username)
        console.log(this.email)
        console.log(this.telefono)
        console.log(this.username)
      }

    )


  }
  controlarErrorAsiento(condicion: boolean, mensaje: string) {
    this.errorAsiento = condicion;
    this.errorAsientoMsj = mensaje;
  }
  errorAsiento: boolean = false;
  errorAsientoMsj: string = ""
  validacion() {
    if (this.user.username === '') {
      this.controlarErrorAsiento(true, "Ingrese Usuario")
      return;
    }
  }
  mostrarError: boolean = false;
  formSubmit() {

    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Usuario guardado', 'Usuario registrado con exito en el sistema', 'success');
      }, (error) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema !!', 'Aceptar', {
          duration: 3000
        });
      }
    )
  }

}
