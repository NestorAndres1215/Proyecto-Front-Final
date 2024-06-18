import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { TablaGeneralesComponent } from '../tabla-generales.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MensajeService } from 'src/app/services/mensaje.service';
import { GeneralesService } from 'src/app/services/generales.service';

@Component({
  selector: 'app-visor-tabla-generales',
  templateUrl: './visor-tabla-generales.component.html',
  styleUrls: ['./visor-tabla-generales.component.css']
})
export class VisorTablaGeneralesComponent implements OnInit {

  codigo: String
  nombre: String
  clave: String
  public formulario: UntypedFormGroup;

  constructor(
    private dialogRe: MatDialogRef<TablaGeneralesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef,
    private mensajeService: MensajeService,
    private dialog: MatDialog,
    private change: ChangeDetectorRef,
    private servicio: GeneralesService,
    private formBuilder: UntypedFormBuilder,
  ) { }


  ngOnInit(): void {
    console.log(this.data)
    this.codigo = this.data.row.tl_codigo
    this.clave = this.data.row.tl_clave
    this.nombre = this.data.row.tl_descri1
    this.initForm();
    this.deshabilitar()
  }

  cerrar() {
    this.dialogRe.close();
  }
  initForm(): void {

    this.formulario = this.formBuilder.group({
      nombre: [this.nombre, Validators.required],
      codigo: [this.codigo, Validators.required],
      clave: [this.clave, Validators.required],
    });
  }
  deshabilitar() {
    this.formulario.get('codigo').disable();
    this.formulario.get('nombre').disable();
    this.formulario.get('clave').disable();
  }
}
