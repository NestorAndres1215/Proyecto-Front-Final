import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-visor-perfil',
  templateUrl: './visor-perfil.component.html',
  styleUrls: ['./visor-perfil.component.css']
})
export class VisorPerfilComponent implements OnInit {
  public formulario: UntypedFormGroup;
  datos: any
  constructor(private formBuilder: UntypedFormBuilder,
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

    this.datos = dataArray;
  }

  mostrarImagen(perfil: any): string {
    return perfil.ul_perfil ? this.imagenUrlBase + perfil.ul_perfil : '';
  }

  cerrar() { }
}
