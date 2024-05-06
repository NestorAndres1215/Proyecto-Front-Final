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
  lista: any
  username: string
  email: string;
  telefono: string;
  nombre: string
  apellido: string
  contra: string
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
      telefono: [this.telefono, Validators.required]
    });
  }

  listarEdiciones() {

    this.username = this.lista.row.username;
    this.nombre = this.lista.row.nombre;
    this.apellido = this.lista.row.apellido;
    this.email = this.lista.email;
    this.telefono = this.lista.row.telefono;
    this.contra = this.lista.row.password
    this.initForm()

  }

  cerrar() {
    this.dialogRe.close();
  }
}





