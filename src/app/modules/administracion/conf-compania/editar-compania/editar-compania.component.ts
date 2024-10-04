import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfCompaniaComponent } from '../conf-compania.component';
import { Compania } from 'src/app/model/compania';
import { CompaniaService } from 'src/app/services/compania.service';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-editar-compania',
  templateUrl: './editar-compania.component.html',
  styleUrls: ['./editar-compania.component.css']
})
export class EditarCompaniaComponent implements OnInit {

  selectedFile: string | ArrayBuffer | null = null;

  public formulario: UntypedFormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRe: MatDialogRef<ConfCompaniaComponent>,
    private service: CompaniaService,
    private cdr: ChangeDetectorRef,
    private mensajeService: MensajeService,
    private dialog: MatDialog,
    private formBuilder: UntypedFormBuilder,) { }
  nombre: string
  ruc: string
  email: string
  telefono: string
  direccion: string
  pais: string
  sector: string
  descripcion: string
  logo: string
  fecha: string
  ngOnInit(): void {
    this.logo = this.data.row.com_logo
    console.log(this.logo)
    console.log(this.data.row.com_fecha_de_fundacion)
    this.fecha= this.data.row.com_fecha_de_fundacion
    this.nombre = this.data.row.com_nombre
    this.ruc = this.data.row.com_ruc
    this.telefono = this.data.row.com_telefono
    this.email = this.data.row.com_correo
    this.pais = this.data.row.com_pais
    this.direccion = this.data.row.com_direccion
    this.sector = this.data.row.com_sector
    this.descripcion = this.data.row.com_descripcion

    this.initForm()
  }


  initForm(): void {

    this.formulario = this.formBuilder.group({
      nombre: [this.nombre, Validators.required],
      ruc: [this.ruc, Validators.required],
      email: [this.email, [Validators.required]],
      pais: [this.pais, Validators.required],
      sector: [this.sector, Validators.required],
      logo: [this.logo, [Validators.required]],
      fecha: [this.fecha, [Validators.required]],
      telefono: [this.telefono, Validators.required],
      direccion: [this.direccion, Validators.required],
      descripcion: [this.descripcion, Validators.required],
    });
  }

  cerrar() {
    this.dialogRe.close();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedFile = reader.result;
      };
    }
  }
  operar() {
    if (this.formulario.valid) {
      const formValues = this.formulario.value;
      const registrar = {
        com_codigo: '001',
        com_nombre: formValues.nombre,
        com_ruc: formValues.ruc,
        com_telefono: formValues.telefono,
        com_correo: formValues.email,
        com_direccion: formValues.direccion,
        com_pais: formValues.pais,
        com_sector: formValues.sector,
        com_fecha_de_fundacion: formValues.fecha,
        com_descripcion: formValues.descripcion,
      };
      let com_logo=this.formulario.get('logo').value;
      this.service.actualizarCategoria('001', registrar ).subscribe(
        (response) => {
          this.mensajeService.MostrarMensaje('Se Registro Usuario');
          this.formulario.reset();
          this.dialog.closeAll();
          this.cdr.detectChanges();
        },
        (error) => {
          this.mensajeService.MostrarMensaje('No se registro Usuario');
          console.log(error)
        }
      );

      this.formulario.reset();
      this.cdr.markForCheck();
    }
  }
}
