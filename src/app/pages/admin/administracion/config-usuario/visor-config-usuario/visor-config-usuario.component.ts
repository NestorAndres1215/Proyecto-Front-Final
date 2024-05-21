import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfigUsuarioComponent } from '../config-usuario.component';

@Component({
  selector: 'app-visor-config-usuario',
  templateUrl: './visor-config-usuario.component.html',
  styleUrls: ['./visor-config-usuario.component.css']
})
export class VisorConfigUsuarioComponent implements OnInit {
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
  constructor(
    private dialogRe: MatDialogRef<ConfigUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
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
    this.formulario.get('password').disable();
    this.formulario.get('rol').disable();
    this.formulario.get('apellido').disable();
    this.formulario.get('direccion').disable();
    this.formulario.get('username').disable();
    this.formulario.get('nombre').disable();
    this.formulario.get('telefono').disable();
    this.formulario.get('email').disable();
  }

  togglePasswordVisibility(input: HTMLInputElement): void {
    this.showPassword = !this.showPassword;
    input.type = this.showPassword ? 'text' : 'password';
  }

  cerrar() {
    this.dialogRe.close();
  }
}





