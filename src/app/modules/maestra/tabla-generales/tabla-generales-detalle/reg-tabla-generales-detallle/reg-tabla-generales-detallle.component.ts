import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MensajeService } from 'src/app/services/mensaje.service';
import { TablaGeneralesDetalleComponent } from '../tabla-generales-detalle.component';
import { GeneralesService } from 'src/app/services/generales.service';
import { Detalle } from 'src/app/model/general';


@Component({
  selector: 'app-reg-tabla-generales-detallle',
  templateUrl: './reg-tabla-generales-detallle.component.html',
  styleUrls: ['./reg-tabla-generales-detallle.component.css']
})
export class RegTablaGeneralesDetallleComponent implements OnInit {

  volver() {
    this.dialogRe.close();
  }
  constructor(
    private formBuilder: FormBuilder,
    private service:GeneralesService,
    private dialogRe: MatDialogRef<TablaGeneralesDetalleComponent>,
    private mensajeService: MensajeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  public formulario: UntypedFormGroup;
  codigo: String
  ngOnInit(): void {
    this.codigo = this.data.codigo
    this.initForm();
    this.deshabilitar();
  }
  initForm(): void {

    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      codigo: [this.codigo, Validators.required],
      clave: ['', Validators.required],
    });
  }
  operar() {
    console.log(this.formulario.value);
    const codigo = this.formulario.get('codigo').value;
  
    // Validación del código
    if (!codigo || codigo.length !== 4 || !/^\d{4}$/.test(codigo)) {
      this.mensajeService.MostrarMensaje("EL CÓDIGO DEBE TENER EXACTAMENTE 4 DÍGITOS");
      return;
    }
  
    // Validación del formulario
    if (this.formulario.valid) {
      const objRegistrar: Detalle = {
        clave: this.formulario.get('clave').value,
        codigo: this.formulario.get('codigo').value,
        descripcion: this.formulario.get('nombre').value,
        tl_descri2: ""
      };
  
 

  
      this.service.registrar(objRegistrar).subscribe({
        next: (response) => {
          // Manejo de respuesta
          if (typeof response === 'string') {
            // Respuesta en texto
            this.mensajeService.MostrarMensaje(response);
          } else {
            // Manejo de JSON (si esperas un JSON)
            this.mensajeService.MostrarMensaje("Registro exitoso");
          }
        },
        error: (error) => {
          // Manejo de error
          console.log('Error inesperado:', error);
          this.mensajeService.MostrarBodyError(error);
        }
      });
      
      
      
    } else {
      // Manejo del caso cuando el formulario no es válido
      console.log('El formulario no es válido');
      this.formulario.markAllAsTouched();
    }
  }
  

  deshabilitar() {
    this.formulario.get('codigo').disable();
  }
}
