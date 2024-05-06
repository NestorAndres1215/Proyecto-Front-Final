import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-visor-config-usuario',
  templateUrl: './visor-config-usuario.component.html',
  styleUrls: ['./visor-config-usuario.component.css']
})
export class VisorConfigUsuarioComponent implements OnInit {
  public formulario: UntypedFormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: UntypedFormBuilder,) { }

  ngOnInit(): void {
this.initForm()
    this.listarEdiciones()

  }
  initForm(): void {

    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      username: [this.username, Validators.required],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required]
    });
    console.log(this.formulario.value)
  }

  username: any
  nombre: string
  apellido: string
  listarEdiciones() {
    if (this.data && typeof this.data === 'object' && this.data.username) {
      const username = this.data.username;
      console.log(username);
    } else {
      console.log("No se encontró el username en los datos proporcionados.");
    }
  }
  
}


